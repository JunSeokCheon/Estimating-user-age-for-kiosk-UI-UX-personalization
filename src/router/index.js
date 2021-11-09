import Vue from "vue";
import VueRouter from "vue-router";

import Home from "../views/Home.vue";
import About from "../views/About.vue";
import ScreenSaver from "../views/ScreenSaver.vue";
import FaceDetector from "../views/FaceDetector.vue";
import MenuSenior from "../views/MenuSenior.vue";
import OrderList from "../views/OrderList.vue";
import OrderPayment from "../views/OrderPayment.vue";
import OrderComplete from "../views/OrderComplete.vue";

import SelectToGo from "../components/SelectToGo.vue";
import SelectBurger from "../components/SelectBurger.vue";
import SelectBurgerList from "../components/SelectBurgerList.vue";
import SelectBurgerSet from "../components/SelectBurgerSet.vue";
import SelectSide from "../components/SelectSideMenu.vue";
import SelectSideList from "../components/SelectSideMenuList.vue";
import SelectDrink from "../components/SelectDrink.vue";
import SelectDrinkList from "../components/SelectDrinkList.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "ScreenSaver",
    component: ScreenSaver,
  },
  {
    path: "/home",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    component: About,
    // component: () =>
    //   import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    path: "/face",
    name: "FaceDetector",
    component: FaceDetector,
  },
  {
    path: "/menu/default",
    name: "FaceDetector",
    component: FaceDetector,
  },
  {
    path: "/menu/senior",
    name: "MenuSenior",
    component: MenuSenior,
    children: [
      { path: "togo", component: SelectToGo },
      { path: "burger", component: SelectBurger },
      { path: "burgerlist", component: SelectBurgerList },
      { path: "burgerset", component: SelectBurgerSet },
      { path: "side", component: SelectSide },
      { path: "sidelist", component: SelectSideList },
      { path: "drink", component: SelectDrink },
      { path: "drinklist", component: SelectDrinkList },
    ],
  },
  {
    path: "/orderlist",
    name: "Orderlist",
    component: OrderList,
  },
  {
    path: "/orderpayment",
    name: "OrderPayment",
    component: OrderPayment,
  },
  {
    path: "/ordercomplete",
    name: "OrderComplete",
    component: OrderComplete,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
