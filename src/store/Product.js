const Product = {
  namespaced: true,
  state: {
    burgerList: [
      {
        name: "빅맥®",
        name_en: "Big Mac®",
        descript:
          "100% 순 쇠고기 패티 두 장에 빅맥®만의 특별한 소스. 입안에서 살살 녹는 치즈와 신선한 양상추, 양파, 그리고 피클까지.",
        allergyInfo: "(난류, 우유, 대두, 밀, 쇠고기)",
        price: 4600,
        comboPrice: 5900,
        type: "beef",
        img: require("../assets/product/Big Mac.png"),
        comboImg: require("../assets/product/Big Mac Meal.png"),
      },
      {
        name: "1955® 버거",
        name_en: "1955® Burger",
        descript:
          "113g 두툼한 순 쇠고기 패티, 특별한 1955 소스에 깊은 풍미의 그릴드 어니언까지!",
        allergyInfo: "(난류, 우유, 대두, 밀, 돼지고기, 토마토, 쇠고기)",
        price: 6400,
        type: "beef",
        img: require("../assets/product/1955 Burger.png"),
      },
      {
        name: "트리플 치즈버거",
        name_en: "Triple Cheeseburger",
        descript:
          "부드러운 치즈와 풍부한 육즙의 패티를 세배 더 진하게 즐길 수 있는 트리플 치즈버거",
        allergyInfo: "(우유, 대두, 밀, 토마토, 쇠고기)",
        price: 6300,
        type: "beef",
        img: require("../assets/product/Triple Cheeseburger.png"),
      },
      {
        name: "맥스파이시® 상하이 버거",
        name_en: "McSpicy® Shanghai Burger",
        descript:
          "매콤한 시즈닝을 입힌 100% 닭가슴 통살 위에 아삭아삭한 양상추와 신선한 토마토~",
        allergyInfo: "(난류, 대두, 밀, 토마토, 닭고기)",
        price: 4600,
        comboPrice: 5300,
        type: "chicken",
        img: require("../assets/product/McSpicy Shanghai Burger.png"),
        comboImg: require("../assets/product/McSpicy Shanghai Burger Meal.png"),
      },
      {
        name: "맥치킨® 모짜렐라",
        name_en: "McChicken® Mozzarella",
        descript:
          "든든한 맥치킨에 골든 모짜렐라 치즈 스틱 2개와 매콤한 아라비아따 소스를 더해 강렬하게 재탄생한 맥치킨 모짜렐라!",
        allergyInfo: "(난류, 우유, 대두, 밀, 토마토, 닭고기)",
        price: 5500,
        type: "chicken",
        img: require("../assets/product/McChicken Mozzarella.png"),
      },
      {
        name: "맥치킨®",
        name_en: "McChicken®",
        descript:
          "바삭한 치킨 패티, 고소한 화이트 마요 소스와 아삭한 양상추가 함께!",
        allergyInfo: "(난류, 대두, 밀, 닭고기)",
        price: 4000,
        type: "chicken",
        img: require("../assets/product/McChicken.png"),
      },
    ],
    sideList: [
      {
        name: "후렌치 후라이",
        name_en: "French Fries",
        descript:
          "통으로 썰어낸 감자를 맥도날드만의 노하우로 튀겨낸 남다른 맛과 바삭함!",
        allergyInfo: "(대두)",
        price: 1600,
        type: "side",
        img: require("../assets/product/French Fries.png"),
      },
      {
        name: "맥너겟®",
        name_en: "McNuggets®",
        descript:
          "바삭하고 촉촉한 치킨이 한 입에 쏙! 다양한 소스로 입맛에 맞게 즐겨보세요!",
        allergyInfo: "(대두, 밀, 닭고기)",
        price: 1700,
        type: "side",
        img: require("../assets/product/McNuggets.png"),
      },
      {
        name: "상하이 치킨 스낵랩",
        name_en: "Shanghai Chicken Wrap",
        descript: "매콤한 치킨에 달콤한 화이트 마요 소스로 매콤달콤하게!",
        allergyInfo: "(난류, 대두, 밀, 돼지고기, 닭고기)",
        price: 2000,
        type: "side",
        img: require("../assets/product/Shanghai Chicken Snack Wrap.png"),
      },
      {
        name: "골든 모짜렐라 치즈스틱",
        name_en: "Mozzarella Cheese Sticks",
        descript:
          "속이 꽉 찬 황금빛 바삭함! 자연 모짜렐라 치즈로 빈틈 없이 고소한 맥도날드 치즈스틱.",
        allergyInfo: "(우유, 대두, 밀)",
        price: 2000,
        type: "side",
        img: require("../assets/product/Golden Mozzarella Cheese Sticks.png"),
      },
      {
        name: "오레오 맥플러리",
        name_en: "Oreo McFlurry",
        descript: "우유 듬뿍 신선한 아이스크림에 아삭아삭 오레오 쿠키가 가득!",
        allergyInfo: "(우유, 대두, 밀)",
        price: 2500,
        type: "dessert",
        img: require("../assets/product/Oreo McFlurry.png"),
      },
      {
        name: "아이스크림콘",
        name_en: "Ice Cream Cone",
        descript: "신선한 우유로 만든 부드러운 아이스크림 콘.",
        allergyInfo: "(우유, 밀)",
        price: 700,
        type: "dessert",
        img: require("../assets/product/Ice Cream Cone.png"),
      },
      {
        name: "딸기 선데이 아이스크림",
        name_en: "Strawberry Sundae",
        descript: "신선한 우유와 딸기가 아이스크림으로 만났다!",
        allergyInfo: "(우유)",
        price: 1500,
        type: "dessert",
        img: require("../assets/product/Strawberry Sundae.png"),
      },
      {
        name: "애플 파이",
        name_en: "Apple Pie",
        descript: "바삭한 파이 속 사과 과육이 아삭! 애플파이!",
        allergyInfo: "(밀)",
        price: 1000,
        type: "dessert",
        img: require("../assets/product/Apple Pie.png"),
      },
    ],
    drinkList: [
      {
        name: "코카-콜라",
        name_en: "Coca-Cola",
        descript: "갈증해소 뿐만이 아니라 기분까지 상쾌하게! 코카-콜라",
        allergyInfo: "(없음)",
        price: 1300,
        type: "drink",
        img: require("../assets/product/Coca-Cola.png"),
      },
      {
        name: "스프라이트",
        name_en: "Sprite",
        descript: "청량함에 레몬, 라임향을 더한 시원함!",
        allergyInfo: "(없음)",
        price: 1300,
        type: "drink",
        img: require("../assets/product/Sprite.png"),
      },
      {
        name: "환타",
        name_en: "Fanta",
        descript: "톡 쏘는 오렌지 향!",
        allergyInfo: "(없음)",
        price: 1300,
        type: "drink",
        img: require("../assets/product/Fanta.png"),
      },
      {
        name: "바닐라 쉐이크",
        name_en: "Vanilla Shake",
        descript:
          "신선한 우유에 달콤한 바닐라 시럽으로 맛을 더한 깔끔한 쉐이크!",
        allergyInfo: "(우유)",
        price: 2500,
        type: "drink",
        img: require("../assets/product/Vanilla Shake.png"),
      },
      {
        name: "아메리카노",
        name_en: "Americano",
        descript: "바로 내린 100% 친환경 커피로 더 신선하게! 더 풍부하게!",
        allergyInfo: "(없음)",
        price: 1500,
        type: "cafe",
        img: require("../assets/product/Americano.png"),
      },
      {
        name: "아이스 아메리카노",
        name_en: "Iced Americano",
        descript: "바로 내린 100% 친환경 커피로 더 신선하게! 더 풍부하게!",
        allergyInfo: "(없음)",
        price: 1500,
        type: "cafe",
        img: require("../assets/product/Iced Americano.png"),
      },
      {
        name: "카페라떼",
        name_en: "Café Latte",
        descript:
          "바로 내린 100% 친환경 커피가 신선한 우유를 만나 더 신선하고 부드럽게!",
        allergyInfo: "(우유)",
        price: 2000,
        type: "cafe",
        img: require("../assets/product/Café Latte.png"),
      },
      {
        name: "아이스 카페라떼",
        name_en: "Iced Café Latte",
        descript:
          "바로 내린 100% 친환경 커피가 신선한 우유를 만나 더 신선하고 부드럽게!",
        allergyInfo: "(우유)",
        price: 2000,
        type: "cafe",
        img: require("../assets/product/Iced Café Latte.png"),
      },
    ],
  },
  getters: {
    getBurgerList: (state) => {
      return state.burgerList;
    },
    getSideList: (state) => {
      return state.sideList;
    },
    getDrinkList: (state) => {
      return state.drinkList;
    },
  },
  mutations: {},
  actions: {},
};

export default Product;
