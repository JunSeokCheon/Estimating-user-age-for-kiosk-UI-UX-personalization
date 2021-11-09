<template>
  <div class="OrderPayment">
    <router-link
      class="router-wrap"
      style="text-decoration: none; color: inherit"
      to="/ordercomplete"
    >
      <div class="logo-wrap">
        <img
          class="logo"
          alt="Mcdonalds logo"
          src="../assets/logo-Mcdonalds.png"
        />
      </div>
      <h4 class="font-white">아래 설명에 따라 결제를 진행해 주세요.</h4>
      <div class="guide-wrap">
        <div class="guide-round-box">IC신용/체크카드 사용시</div>
        <span><strong>카드를 화살표 방향으로</strong> 투입구에 넣어주세요</span>
        <span>결제 오류 시, <strong>카드를 긁어주세요</strong></span>
        <img class="guideImg" src="../assets/icon/atm machine.png" />
      </div>
    </router-link>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
const store = "store";

export default {
  name: "OrderPayment",
  computed: {
    ...mapGetters(store, {
      getOrderNum: "getOrderNum",
    }),
  },
};
</script>

<style lang="scss">
@import "../styles/global.scss";

.OrderPayment {
  display: flex;
  flex-flow: column;
  justify-content: flex-start;
  align-items: center;
  width: 540px;
  height: 960px;
  background: #385723;
  text-align: center;
}

.logo-wrap {
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  height: 300px;
}

.logo {
  transform: scale(1.5);
}

.guide-wrap {
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  width: 460px;
  border-radius: 10px;
  font-size: 0.9rem;
  background-color: #fff;
}

.guide-round-box {
  width: 180px;
  height: 30px;
  margin: 20px 0px;
  border-radius: 15px;
  line-height: 30px;
  font-size: 0.9rem;
  font-weight: bold;
  text-align: center;
  color: #fff;
  background-color: #c00000;
}

.guideImg {
  transform: scale(0.8) translateY(-20px);
}
</style>
