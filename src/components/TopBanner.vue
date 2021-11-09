<template>
  <div class="TopBanner">
    <agile
      class="slidelist"
      :navButtons="false"
      :autoplay="true"
      :autoplay-speed="10000"
    >
      <div class="slide">
        <img src="../assets/banner/banner_1.png" />
      </div>
      <div class="slide">
        <img src="../assets/banner/banner_2.png" />
      </div>
      <div class="slide">
        <img src="../assets/banner/banner_3.png" />
      </div>
    </agile>
  </div>
</template>

<script>
import { VueAgile } from "vue-agile";

export default {
  name: "TopBanner",
  components: {
    agile: VueAgile,
  },
};
</script>

<style lang="scss">
.TopBanner {
  width: 100%;
  height: 100%;
}

.agile {
  &__dots {
    bottom: -10px;
    left: 50%;
    position: absolute;
    transform: translateX(-50%);
  }

  &__dot {
    margin: 0 10px;
    button {
      background-color: #fff;
      border: 2px solid #385723;
      border-radius: 50%;
      cursor: pointer;
      display: block;
      width: 10px;
      height: 10px;
      font-size: 0;
      line-height: 0;
      margin: 0;
      padding: 0;
      transition-duration: 0.3s;
    }
    &--current,
    &:hover {
      button {
        background-color: #70ad47;
      }
    }
  }
}

.slide {
  display: block;
  object-fit: cover;
  img {
    width: 100%;
  }
}
</style>
