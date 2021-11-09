<template>
  <div class="OrderComplete">
    <router-link
      class="router-wrap"
      style="text-decoration: none; color: inherit"
      to="/"
    >
      <div class="logo-wrap">
        <img
          class="logo"
          alt="Mcdonalds logo"
          src="../assets/logo-Mcdonalds.png"
        />
      </div>
      <h1 class="font-white font-bold">주문 완료</h1>
      <h4 class="font-white">주문 번호는 {{ getOrderNum }}입니다.</h4>
      <h4 class="font-white">주문 번호표가 출력될 예정입니다.</h4>
    </router-link>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
const store = "store";

export default {
  name: "OrderComplete",
  computed: {
    ...mapGetters(store, {
      getOrderNum: "getOrderNum",
    }),
  },
};
</script>

<style lang="scss">
@import "../styles/global.scss";

.OrderComplete {
  display: flex;
  flex-flow: column;
  justify-content: flex-start;
  align-items: center;
  width: 540px;
  height: 960px;
  background: #385723;
  text-align: center;
}
</style>
