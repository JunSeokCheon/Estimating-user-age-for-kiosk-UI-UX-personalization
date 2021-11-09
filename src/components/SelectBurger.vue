<template>
  <div class="selectBurger-warp">
    <div class="info-wrap">
      <h3 class="font-bold">먹고 싶은 버거를 골라주세요</h3>
    </div>
    <div class="content-wrap">
      <ul class="content-list">
        <li>
          <img class="content-icon" src="../assets/icon/beef.png" />
          <div class="content-descript">
            <span>소고기</span>
            <span>Beef</span>
          </div>
          <button
            class="content-btn font-white font-bold"
            @click.prevent="selectBurgerType('beef')"
          >
            <span>선택</span>
          </button>
        </li>
        <li>
          <img class="content-icon" src="../assets/icon/pork.png" />
          <div class="content-descript">
            <span>돼지고기</span>
            <span>Pork</span>
          </div>
          <button
            class="content-btn font-white font-bold"
            @click.prevent="selectBurgerType('pork')"
          >
            <span>선택</span>
          </button>
        </li>
        <li>
          <img class="content-icon" src="../assets/icon/chicken.png" />
          <div class="content-descript">
            <span>닭고기</span>
            <span>Chicken</span>
          </div>
          <button
            class="content-btn font-white font-bold"
            @click.prevent="selectBurgerType('chicken')"
          >
            <span>선택</span>
          </button>
        </li>
        <li>
          <img class="content-icon" src="../assets/icon/shrimp.png" />
          <div class="content-descript">
            <span>해산물</span>
            <span>Sea Food</span>
          </div>
          <button
            class="content-btn font-white font-bold"
            @click.prevent="selectBurgerType('seafood')"
          >
            <span>선택</span>
          </button>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
const store = "store";

export default {
  name: "SelectBurger",
  mounted() {
    this.setStep(2);
  },
  methods: {
    ...mapMutations(store, {
      setStep: "setStep",
      setBurgerType: "setBurgerType",
    }),
    selectBurgerType(type) {
      this.setBurgerType(type);
      this.$router.push("burgerlist");
    },
  },
};
</script>

<style lang="scss">
.selectBurger-warp {
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
