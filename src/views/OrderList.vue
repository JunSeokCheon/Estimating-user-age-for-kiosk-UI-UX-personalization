<template>
  <div class="OrderList">
    <router-link
      class="router-wrap"
      style="text-decoration: none; color: inherit"
      to="/orderpayment"
    >
      <div class="logo-wrap">
        <img
          class="logo"
          alt="Mcdonalds logo"
          src="../assets/logo-Mcdonalds.png"
        />
      </div>
      <h4 class="font-white">주문을 확인하세요</h4>
      <div class="bill-wrap">
        <div class="guide-box">1 X 맥스파이시® 상하이 버거</div>
        <div class="split-dash"></div>
        <div class="a1">
          <span><strong>코카-콜라</strong> - 미디엄 </span>
          <span><strong>후렌치 후라이</strong> - 미디엄 </span>
          <span><strong>맥 너겟</strong> - 4조각 </span>
          <span><strong>스프라이트</strong> - 미디엄 </span>
        </div>
        <div class="a2">
          <span><strong>가격 ￦</strong>7000</span>
        </div>
        <div class="split-dash"></div>
        <div class="Controller">
          <button
            class="btn-c font-white font-bold"
            @click.prevent="$router.push('/')"
          >
            삭제
          </button>
          <button
            class="btn-ch font-white font-bold"
            @click.prevent="$router.push('/orderpayment')"
          >
            변경
          </button>
        </div>
      </div>
      <button
        class="btn-add font-white font-bold"
        @click.prevent="$router.push('/orderpayment')"
      >
        추가 주문
      </button>
    </router-link>

    <div class="Controller">
      <button
        class="btn-cancel font-white font-bold"
        @click.prevent="$router.push('/')"
      >
        모두 취소
      </button>
      <button
        class="btn-next font-white font-bold"
        @click.prevent="$router.push('/orderpayment')"
      >
        결제하기
      </button>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
const store = "store";

export default {
  name: "OrderList",
  computed: {
    ...mapGetters(store, {
      getOrderNum: "getOrderNum",
    }),
  },
};
</script>

<style lang="scss">
@import "../styles/global.scss";

.OrderList {
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

.bill-wrap {
  position: relative;
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: flex-start;
  width: 460px;
  border-radius: 5px;
  font-size: 0.9rem;
  background-color: #fff;
}

.guide-box {
  width: 460px;
  height: 30px;
  margin: 10px 0px;
  line-height: 30px;
  font-size: 0.9rem;
  font-weight: bold;
  text-align: center;
  color: #fff;
  background-color: #c00000;
}

.a1 {
  position: relative;
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: flex-start;
  width: 460px;
  padding: 0px 10px;
}

.a2 {
  position: relative;
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: flex-end;
  width: 460px;
  padding: 0px 10px;
}

.control-b {
  border: hidden;
  border-radius: 10px;
  margin: 10px;
  width: 200px;
  height: 40px;
  color: #fff;
  font-size: 1.5rem;
}

.btn-add {
  @extend .control-b;
  width: 460px;
  border-radius: 5px;

  background-color: #70ad47;
  &:active {
    background-color: #385723;
  }
}

.btn-c {
  @extend .control-b;
  background-color: #c00000;
  &:active {
    background-color: #771010;
  }
}

.btn-ch {
  @extend .control-b;
  background-color: #70ad47;
  &:active {
    background-color: #385723;
  }
}
.guideImg {
  transform: scale(0.8) translateY(-20px);
}
</style>
