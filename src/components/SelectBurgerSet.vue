<template>
  <div class="selectCombo-warp">
    <div class="info-wrap">
      <h3 class="font-bold">이런 세트는 어떠세요?</h3>
    </div>
    <div class="content-wrap">
      <ul class="content-list">
        <li>
          <img class="content-img" :src="burger[0].img" />
          <div class="content-descript">
            <span class="content-title">단품</span>
            <span class="content-sub">Single</span>
            <span class="content-sub-green">가격 ￦ {{ burger[0].price }}</span>
          </div>
          <button
            class="content-btn font-white font-bold"
            @click.prevent="selectCombo('single')"
          >
            <span>선택</span>
          </button>
        </li>
        <li>
          <img class="content-img" :src="burger[0].comboImg" />
          <div class="content-descript">
            <span class="content-title">세트</span>
            <span class="content-sub">Combo</span>
            <span class="content-sub-green"
              >가격 ￦ {{ burger[0].comboPrice }}</span
            >
          </div>
          <button
            class="content-btn font-white font-bold"
            @click.prevent="selectCombo('combo')"
          >
            <span>선택</span>
          </button>
        </li>
        <li>
          <img class="content-img" :src="burger[0].comboImg" />
          <div class="content-descript">
            <span class="content-title">라지 세트</span>
            <span class="content-sub">Large Combo</span>
            <span class="content-sub-green"
              >가격 ￦ {{ burger[0].comboPrice + 600 }}</span
            >
          </div>
          <button
            class="content-btn font-white font-bold"
            @click.prevent="selectCombo('large combo')"
          >
            <span>선택</span>
          </button>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
const store = "store";
const product = "product";

export default {
  name: "SelectCombo",
  data() {
    return {
      burger: null,
    };
  },
  mounted() {
    this.setStep(3);
    this.burger = this.getBurgerList.filter(
      (item) => item.name == this.getBurger
    );
  },
  methods: {
    ...mapMutations(store, {
      setStep: "setStep",
      setCombo: "setCombo",
    }),
    selectCombo(type) {
      this.setCombo(type);
      this.$router.push("side");
    },
  },
  computed: {
    ...mapGetters(store, {
      getBurger: "getBurger",
    }),
    ...mapGetters(product, {
      getBurgerList: "getBurgerList",
    }),
  },
};
</script>

<style lang="scss">
.selectCombo-warp {
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

.content-btn {
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  border: hidden;
  border-radius: 10px;
  margin: 10px;
  width: 30%;
  height: 100%;
  color: #fff;
  font-size: 2rem;
  background-color: #70ad47;
  &:active {
    background-color: #385723;
  }
}

.content-wrap {
  height: 80%;
}

.content-descript {
  display: flex;
  flex-flow: column;
  align-items: flex-start;
  width: 25%;
  font-size: 1.3rem;
}

.content-icon {
  width: 15%;
  margin: 0px auto;
  filter: opacity(0.6) drop-shadow(0 0 0 #2c3e50);
}

.content-list {
  display: flex;
  flex-flow: column;
  justify-content: space-around;
  height: 100%;
  counter-reset: step;
  list-style: none;
  padding-left: 0;

  li {
    display: flex;
    justify-content: center;
    align-items: center;
    float: top;
    font-weight: bold;
    width: 100%;
    position: relative;
    text-align: center;

    &:before {
      content: counter(step);
      counter-increment: step;
      width: 50px;
      height: 50px;
      border: 3px solid #385723;
      display: block;
      margin: 0 auto;
      border-radius: 50%;
      line-height: 45px;
      background: white;
      color: #385723;
      text-align: center;
      font-size: 2rem;
    }
  }
}
</style>
