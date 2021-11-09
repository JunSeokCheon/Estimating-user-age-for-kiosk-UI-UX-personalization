<template>
  <div class="progressbar-wrap">
    <div class="progressbar-container">
      <ul class="progressbar">
        <li :class="{ active: checkStep(1) }">포장</li>
        <li :class="{ active: checkStep(2) }">햄버거</li>
        <li :class="{ active: checkStep(3) }">세트</li>
        <li :class="{ active: checkStep(4) }">사이드</li>
        <li :class="{ active: checkStep(5) }">음료</li>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
const store = "store";

export default {
  name: "Controler",
  computed: {
    ...mapGetters(store, {
      getStep: "getStep",
    }),
  },
  methods: {
    checkStep: function (step) {
      return step <= this.getStep;
    },
  },
};
</script>

<style lang="scss">
.progressbar-wrap {
  position: relative;
  width: 100%;
  height: 100px;
}

.progressbar-container {
  position: absolute;
  width: 80%;
  left: 50% - 40%;
  top: 20%;
  z-index: 1;
}

.progressbar {
  counter-reset: step;
  list-style: none;
  padding-left: 0;

  li {
    font-weight: bold;
    float: left;
    width: 20%;
    position: relative;
    text-align: center;

    &:first-child:after {
      content: none;
    }

    &:before {
      content: counter(step);
      counter-increment: step;
      width: 30px;
      height: 30px;
      border: 3px solid #385723;
      display: block;
      margin: 0 auto 10px auto;
      border-radius: 50%;
      line-height: 25px;
      background: #70ad47;
      color: white;
      text-align: center;
      transition-duration: 0.5s;
    }

    &:after {
      content: "";
      position: absolute;
      width: 100%;
      height: 10px;
      background: #385723;
      top: 10px;
      left: -50%;
      z-index: -1;
    }

    &.active:before {
      border-color: #385723;
      background: #ffc000;
      color: white;
      transition-duration: 0.5s;
    }

    &.active:after {
      background: #385723;
    }

    &.active + &:before {
      border-color: #385723;
      background: #ffc000;
      color: white;
    }

    &.active + &:after {
      background: #385723;
    }
  }
}
</style>
