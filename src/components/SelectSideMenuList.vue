<template>
  <div class="selectSideList-warp">
    <div class="info-wrap">
      <h3 class="font-bold">먹고 싶은 사이드메뉴를 골라주세요</h3>
    </div>
    <div class="content-wrap">
      <ul class="content-list">
        <li v-for="item in searchSide(getSideType)" :key="item.name_en">
          <img class="content-img" :src="item.img" />
          <div class="content-info">
            <p>
              알레르기 유발 가능 식재료 <br />
              {{ item.allergyInfo }}
            </p>
          </div>
          <div class="content-descript">
            <span class="content-title">{{ item.name }}</span>
            <span class="content-sub">{{ item.name_en }}</span>
            <span class="content-sub-green">가격 ￦ {{ item.price }}</span>
          </div>
          <button
            class="content-btn font-white font-bold"
            @click.prevent="selectSide(item.name)"
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
  name: "SelectSideList",
  data() {
    return {
      displayList: [],
    };
  },
  mounted() {
    this.setStep(4);
  },
  methods: {
    ...mapMutations(store, {
      setStep: "setStep",
      setSide: "setSide",
    }),
    selectSide(select) {
      this.setSide(select);
      this.$router.push("drink");
    },
    searchSide: function (type) {
      this.displayList = this.getSideList.filter((item) => item.type == type);
      return this.displayList;
    },
  },
  computed: {
    ...mapGetters(store, {
      getSideType: "getSideType",
    }),
    ...mapGetters(product, {
      getSideList: "getSideList",
    }),
    imageSrc() {
      return (img) => {
        return img;
      };
    },
  },
};
</script>

<style lang="scss">
.selectSideList-warp {
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
  width: 20%;
  height: 60px;
  color: #fff;
  font-size: 1.3rem;
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
  width: 35%;
  font-size: 1.3rem;
}

.content-title {
  font-size: 1rem;
}

.content-sub {
  font-size: 0.8rem;
}

.content-sub-green {
  font-size: 0.8rem;
  color: #70ad47;
}

.content-img {
  width: 15%;
  margin: 0px auto;
  object-fit: cover;
  transform: translateY(-10%) scale(1.5);
}

.content-padding-top {
  padding-top: 120px;
}

.content-list {
  display: flex;
  flex-flow: column nowrap;
  overflow: auto;
  justify-content: space-around;
  height: 480px;
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
    min-height: 120px;
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

  .content-info {
    position: absolute;
    top: 0px;
    left: 100px;
    text-align: center;
    border: 2px solid #385723;
    border-radius: 50%;
    width: 16px;
    height: 16px;
    font-size: 12px;
    line-height: 12px;
    cursor: default;

    &:before {
      content: "i";
      font-weight: bold;
      color: #385723;
    }

    &:hover p {
      display: block;
      transform-origin: 100% 0%;
      -webkit-animation: fadeIn 0.3s ease-in-out;
      animation: fadeIn 0.3s ease-in-out;
    }

    p {
      display: none;
      text-align: left;
      background-color: #fff;
      padding: 5px 10px;
      width: 360px;
      height: 50px;
      position: absolute;
      border: 2px solid #385723;
      border-radius: 3px;
      box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.2);
      top: 20px;
      left: -10px;
      color: #2c3e50;
      font-size: 13px;
      line-height: 1.4;

      &:before {
        position: absolute;
        content: "";
        width: 0;
        height: 0;
        border: 6px solid transparent;
        border-bottom-color: #385723;
        left: 10px;
        top: -12px;
      }

      &:after {
        width: 100%;
        height: 40px;
        content: "";
        position: absolute;
        top: -40px;
        left: 0;
      }
    }
  }
}
</style>
