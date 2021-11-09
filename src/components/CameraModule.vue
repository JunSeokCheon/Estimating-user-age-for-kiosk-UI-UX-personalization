<template>
  <div class="camera-module">
    <div>
      <div>
        <h2>연령대를 분석하는 중입니다...</h2>
        <div>
          <vue-web-cam
            class="cam-warp"
            ref="webcam"
            width="320px"
            height="240px"
            screenshotFormat="image/png"
            :device-id="deviceId"
            @started="onStarted"
            @stopped="onStopped"
            @error="onError"
            @cameras="onCameras"
            @camera-change="onCameraChange"
          />
        </div>

        <div>
          <div>
            <button type="button" class="btn btn-primary" @click="onCapture">
              Capture Photo
            </button>
            <button type="button" class="btn btn-danger" @click="onStop">
              Stop Camera
            </button>
            <button type="button" class="btn btn-success" @click="onStart">
              Start Camera
            </button>
          </div>
        </div>
      </div>
      <div>
        <h2>Captured Image</h2>
        <figure class="figure">
          <img :src="img" class="img-responsive" />
          <canvas ref="tempCanvas" />
        </figure>
      </div>
    </div>
  </div>
</template>

<script>
import { WebCam } from "vue-web-cam";
export default {
  name: "CameraModule",
  components: {
    "vue-web-cam": WebCam,
  },
  data() {
    return {
      img: null,
      camera: null,
      deviceId: null,
      devices: [],
      src: null,
      cvn: null,
    };
  },
  computed: {
    device: function () {
      return this.devices.find((n) => n.deviceId === this.deviceId);
    },
  },
  watch: {
    camera: function (id) {
      this.deviceId = id;
    },
    devices: function () {
      // Once we have a list select the first one
      const [first] = this.devices;
      if (first) {
        this.camera = first.deviceId;
        this.deviceId = first.deviceId;
      }
    },
  },
  methods: {
    onCapture() {
      let self_ = self;
      this.img = this.$refs.webcam.capture();
      this.cvn = this.$refs.tempCanvas;
      let ctx = this.cvn.getContext("2d");
      let bg = new Image();
      bg.src = this.img;
      bg.onload = function () {
        ctx.drawImage(bg, 0, 0);
        self_.src = self_.$cv.imread(self_.cvn);
      };
      // this.img = this.$refs.webcam.capture();
      // this.img = this.img.split(",");
      // this.src = this.$cv.imread(atob(this.img[1]));
    },
    onStarted(stream) {
      console.log("On Started Event", stream);
    },
    onStopped(stream) {
      console.log("On Stopped Event", stream);
    },
    onStop() {
      this.$refs.webcam.stop();
    },
    onStart() {
      this.$refs.webcam.start();
    },
    onError(error) {
      console.log("On Error Event", error);
    },
    onCameras(cameras) {
      this.devices = cameras;
      console.log("On Cameras Event", cameras);
    },
    onCameraChange(deviceId) {
      this.deviceId = deviceId;
      this.camera = deviceId;
      console.log("On Camera Change Event", deviceId);
    },
  },
};
</script>

<style lang="scss">
.cam-warp {
  width: 320px;
  height: 240px;
  border-radius: 5px;
  transform: rotateY(180deg);
  -webkit-transform: rotateY(180deg); /* Safari and Chrome */
  -moz-transform: rotateY(180deg); /* Firefox */
}
</style>
