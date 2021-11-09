<template>
  <div class="camera-module">
    <h2>연령을 분석하는 중입니다...</h2>
    <div>
      <div>
        <button
          class="mt-1 p-1 btn btn-outline-secondary btn-sm"
          @click="toggleCam('camera')"
        >
          {{ camButton }}
        </button>
      </div>
      <div>
        <video
          id="camera"
          width="320"
          height="240"
          style="display: none"
          autoplay
          playsinline
          muted
        />
        <canvas id="output" width="320" height="240" />
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "CameraModule",
  data: function () {
    return {
      streaming: false,
      cam: null,
      src: null,
      dst: null,
      gray: null,
      cap: null,
      faces: null,
      classifier: null,
      FPS: 30,
    };
  },
  created() {
    // let info = this.$cv.getBuildInformation();
    // console.log("camera module created", info, this.$cv);
  },
  mounted() {
    let context = this;
    this.initCv("camera");

    if (!this.streaming) {
      this.startCam(function () {
        context.streaming = true;
        setTimeout(context.processVideo, 0);
      }, "camera");
    }
  },
  methods: {
    initCv(canId) {
      this.cam = document.getElementById(canId);
      this.src = new this.$cv.Mat(
        this.cam.height,
        this.cam.width,
        this.$cv.CV_8UC4
      );
      this.dst = new this.$cv.Mat(
        this.cam.height,
        this.cam.width,
        this.$cv.CV_8UC4
      );
      this.gray = new this.$cv.Mat();
      this.cap = new this.$cv.VideoCapture(this.cam);
      this.faces = new this.$cv.RectVector();
      this.classifier = new this.$cv.CascadeClassifier();

      let cascadeFile = "haarcascade_frontalface_default.xml";
      this.createFileFromURL(cascadeFile, cascadeFile);
    },
    createFileFromURL(file, url) {
      let context = this;
      axios
        .get("/models/haarcascades/" + url)
        .then((resp) => {
          let rtn = this.$cv.FS_createDataFile(
            "/",
            file,
            resp.data,
            true,
            false,
            false
          );
          rtn = context.classifier.load(file);
          console.log("loaded", rtn, context.classifier.empty());
        })
        .catch((err) => {
          console.log("ERR", err);
        });
    },
    onVideoCanPlay() {
      if (self.onCameraStartedCallback) {
        self.onCameraStartedCallback(self.stream, self.video);
      }
    },
    toggleCam(camId) {
      let context = this;
      if (!this.streaming) {
        this.startCam(function () {
          context.streaming = true;
          setTimeout(context.processVideo, 0);
        }, camId);
      } else {
        this.stopCam();
        context.streaming = false;
      }
    },
    startCam(callback, camId) {
      console.log("camId: ", camId);
      let context = this;
      let cam = document.getElementById(camId);

      navigator.mediaDevices
        .getUserMedia({ video: true, audio: false })
        .then(function (stream) {
          cam.srcObject = stream;
          cam.play();
          self.cam = cam;
          self.stream = stream;
          self.onCameraStartedCallback = callback;
          cam.addEventListener("canplay", context.onVideoCanPlay, false);
        })
        .catch(function (err) {
          console.log("Camera Error: " + err.name + " " + err.message);
        });
    },
    stopCam() {
      if (this.cam) {
        this.cam.pause();
        this.cam.srcObject = null;
      }
      if (this.stream) {
        this.stream.getTracks()[0].stop();
      }
    },
    processVideo() {
      try {
        if (!this.streaming) {
          // clean and stop.
          // this.src.delete();
          // this.dst.delete();
          // this.gray.delete();
          // this.faces.delete();
          // this.classifier.delete();
          return;
        }

        let begin = Date.now();

        this.cap.read(this.src);
        this.src.copyTo(this.dst);
        this.$cv.cvtColor(this.dst, this.gray, this.$cv.COLOR_RGBA2GRAY, 0);
        this.classifier.detectMultiScale(this.gray, this.faces, 1.1, 5);

        // let dst_ = new this.$cv.Mat();
        for (let i = 0; i < this.faces.size(); ++i) {
          let face = this.faces.get(i);
          let point1 = new this.$cv.Point(face.x, face.y);
          let point2 = new this.$cv.Point(
            face.x + face.width,
            face.y + face.height
          );
          this.$cv.rectangle(this.dst, point1, point2, [0, 255, 0, 255]);
          // let rect = new this.$cv.Rect(face.x, face.width, face.y, face.height);
          // dst_ = this.src.roi(rect);
        }
        // this.$cv.imshow("output", dst_);
        this.$cv.imshow("output", this.dst);
        let delay = 1000 / this.FPS - (Date.now() - begin);
        setTimeout(this.processVideo, delay);
      } catch (err) {
        console.log("processVideo() error:: " + err.name + " " + err.message);
      }
    },
  },
  computed: {
    camButton: function () {
      if (!this.streaming) return "웹캠 시작";
      else return "웹캠 종료";
    },
  },
};
</script>

<style lang="scss">
.camera-module {
  display: flex;
  flex-flow: column;
  justify-content: center;
  height: 100%;
}

#preview {
  max-width: 100%;
  height: auto;
  border-radius: 5px;
  margin-bottom: 1rem;
  transform: rotateY(180deg);
  -webkit-transform: rotateY(180deg); /* Safari and Chrome */
  -moz-transform: rotateY(180deg); /* Firefox */
}

#camera,
#output {
  @extend #preview;
}
</style>
