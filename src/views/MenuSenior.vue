<template>
  <div class="MenuSenior">
    <div class="banner-warp">
      <TopBanner></TopBanner>
    </div>
    <div class="content-warp">
      <div class="split-line"></div>
      <ProgressBar></ProgressBar>
      <transition name="slide-up-fade" mode="out-in">
        <router-view />
      </transition>
    </div>
    <div class="control-warp">
      <div class="split-line"></div>
      <Controller></Controller>
    </div>
  </div>
</template>

<script>
import TopBanner from "@/components/TopBanner.vue";
import ProgressBar from "@/components/ProgressBar.vue";
import Controller from "@/components/Controller.vue";
// import SelectTakeout from "@/components/SelectTakeout.vue";

export default {
  name: "MenuSenior",
  components: {
    TopBanner,
    Controller,
    ProgressBar,
    // SelectTakeout,
  },
};
</script>

<style lang="scss">
@import "../styles/global.scss";

.MenuSenior {
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  width: 540px;
  height: 960px;
  text-align: center;
}

.banner-warp {
  position: relative;
  width: 100%;
  height: 150px;
}

.content-warp {
  position: relative;
  width: 100%;
  height: 700px;
}

.control-warp {
  position: relative;
  width: 100%;
  height: 110px;
}

.split-line {
  position: absolute;
  width: 100%;
  height: 1px;
  background-color: #385723;
}
</style>
