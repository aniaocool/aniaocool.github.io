import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import test from "../views/test.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/test",
    name: "test",
    component: test,
  },
];

const router = new VueRouter({
  //mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
