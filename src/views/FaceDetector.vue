<template>
  <div class="FaceDetector">
    <CameraModule class="camera" />
    <transition name="slide-up-fade">
      <div v-if="isSenior">
        <h3>시니어 전용 메뉴로 사용해보시겠어요?</h3>
        <button
          type="button"
          class="btn btn-danger"
          @click="redirectPage('about')"
        >
          아니오
        </button>
        <button
          type="button"
          class="btn btn-success"
          @click="redirectPage('menu/senior/togo')"
        >
          네
        </button>
      </div>
    </transition>
  </div>
</template>

<script>
import CameraModule from "@/components/CameraModule.vue";

import { mapGetters } from "vuex";
const store = "store";

export default {
  name: "FaceDetection",
  components: {
    CameraModule,
  },
  data() {
    return {
      class: null,
    };
  },
  methods: {
    redirectPage(path) {
      this.$router.push(path);
    },
  },
  computed: {
    ...mapGetters(store, {
      getClass: "getClass",
    }),
    isSenior: function () {
      if (this.getClass == 3) {
        return true;
      } else {
        return false;
      }
    },
  },
};
</script>

<style lang="scss">
.face {
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  width: 540px;
  height: 960px;
}
</style>
