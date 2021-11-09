<template>
  <div class="Controller">
    <div class="info" align="left">
      <span class="info-text">알레르기 정보를 보려면 i버튼을 터치하세요.</span>
    </div>
    <button
      class="btn-cancel font-white font-bold"
      @click.prevent="redirectHome()"
    >
      모두 취소
    </button>
    <button
      class="btn-next font-white font-bold"
      @click.prevent="redirectPrevious()"
    >
      뒤로 가기
    </button>
  </div>
</template>

<script>
export default {
  name: "Controller",
  methods: {
    redirectHome() {
      this.$router.push("/");
    },
    redirectPrevious() {
      this.$router.go(-1);
    },
  },
};
</script>

<style lang="scss">
.info-text {
  margin: 15px;
}

.control-btn {
  border: hidden;
  border-radius: 10px;
  margin: 10px;
  width: 240px;
  height: 60px;
  color: #fff;
  font-size: 1.5rem;
}

.btn-cancel {
  @extend .control-btn;
  background-color: #c00000;
  &:active {
    background-color: #771010;
  }
}

.btn-next {
  @extend .control-btn;
  background-color: #70ad47;
  &:active {
    background-color: #385723;
  }
}
</style>
