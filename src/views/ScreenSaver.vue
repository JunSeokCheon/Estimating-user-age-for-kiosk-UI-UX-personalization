<template>
  <div class="ScreenSaver">
    <router-link
      class="router-wrap"
      style="text-decoration: none; color: inherit"
      to="/face"
    >
      <h1 class="font-white font-bold">주문 하기</h1>
      <h3 class="font-white">화면을 터치해 주문을 시작하세요!</h3>
      <div class="circle-wrap">
        <span class="circle"></span>
        <span class="circle-2"></span>
        <i class="bi bi-hand-index-thumb"></i>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "ScreenSaver",
};
</script>

<style lang="scss">
@import "../styles/global.scss";

.ScreenSaver {
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  width: 540px;
  height: 960px;
  background: rgba(112, 173, 71, 1);
  text-align: center;
}

.circle-wrap {
  position: relative;
  width: 540px;
  height: 150px;
}

.circle {
  display: block;
  position: absolute;
  width: 150px;
  height: 150px;
  left: 270 - 75px;
  border-radius: 50%;
  animation-duration: 2s;
  animation-name: growCircle;
  animation-iteration-count: infinite;
}

.circle-2 {
  @extend .circle;
  animation-delay: 0.5s;
}

@keyframes growCircle {
  0% {
    transform: scale(0%);
    background: rgba(56, 87, 35, 0.8);
  }

  100% {
    transform: scale(100%);
    background: rgba(112, 173, 71, 0);
  }
}
</style>
