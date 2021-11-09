const Store = {
  namespaced: true,
  state: {
    model: null,
    class: 3,
    step: 1,
    isToGo: null,
    burgerType: null,
    burger: null,
    sideType: null,
    side: null,
    drinkType: null,
    drink: null,
    orderNum: 1,
    orders: [],
  },
  getters: {
    getModel: (state) => {
      return state.model;
    },
    getClass: (state) => {
      return state.class;
    },
    getStep: (state) => {
      return state.step;
    },
    getToGo: (state) => {
      return state.step;
    },
    getBurgerType: (state) => {
      return state.burgerType;
    },
    getBurger: (state) => {
      return state.burger;
    },
    getSideType: (state) => {
      return state.sideType;
    },
    getSide: (state) => {
      return state.side;
    },
    getDrinkType: (state) => {
      return state.drinkType;
    },
    getDrink: (state) => {
      return state.drink;
    },
    getOrder: (state) => {
      return state.orders;
    },
    getOrderNum: (state) => {
      return state.orderNum;
    },
  },
  mutations: {
    mountModel: (state, _model) => {
      state.model = _model;
    },
    setClass: (state, _class) => {
      state.class = _class;
    },
    setStep: (state, _step) => {
      state.step = _step;
    },
    setToGo: (state, _isToGo) => {
      state.isToGo = _isToGo;
    },
    setBurgerType: (state, _burgerType) => {
      state.burgerType = _burgerType;
    },
    setBurger: (state, _burger) => {
      state.burger = _burger;
    },
    setSideType: (state, _sideType) => {
      state.sideType = _sideType;
    },
    setSide: (state, _side) => {
      state.side = _side;
    },
    setDrinkType: (state, _drinkType) => {
      state.drinkType = _drinkType;
    },
    setDrink: (state, _drink) => {
      state.drink = _drink;
    },
    updateOrderNum: (state) => {
      return (state.orderNum += 1);
    },
    // addOrder: (state, _order) => {},
    // delOrder: (state, _order) => {},
  },
  actions: {},
};

export default Store;
