<template>
  <div class="selectToGo-warp">
    <div class="info-wrap">
      <h3 class="font-bold">식사 장소를 선택해 주세요</h3>
    </div>
    <div class="button-wrap">
      <button
        class="btn-eat-in font-white font-bold"
        @click.prevent="selectToGo(false)"
      >
        <span>매장 식사</span>
        <span>Eat In</span>
      </button>
      <button
        class="btn-to-go font-white font-bold"
        @click.prevent="selectToGo(true)"
      >
        <span>포장 주문</span>
        <span>To Go</span>
      </button>
    </div>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
const store = "store";

export default {
  name: "SelectToGo",
  mounted() {
    this.setStep(1);
  },
  methods: {
    ...mapMutations(store, {
      setStep: "setStep",
      setToGo: "setToGo",
    }),
    selectToGo(select) {
      this.setToGo(select);
      this.$router.push("burger");
    },
  },
};
</script>

<style lang="scss">
.selectToGo-warp {
  position: relative;
  width: 100%;
  height: 600px;
}

.info-wrap {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 20%;
}

.button-wrap {
  display: flex;
  justify-content: center;
  height: 80%;
}

.select-2-split-vertical {
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  border: hidden;
  border-radius: 5px;
  margin: 10px;
  width: 240px;
  height: 400px;
  color: #fff;
  font-size: 2rem;
}

.btn-eat-in {
  @extend .select-2-split-vertical;
  background-color: #70ad47;
  &:active {
    background-color: #385723;
  }
}

.btn-to-go {
  @extend .select-2-split-vertical;
  background-color: #70ad47;
  &:active {
    background-color: #385723;
  }
}
</style>
