import { createRouter, createWebHistory } from "vue-router";
import Home from "../components/Home.vue";
import User from "../components/User.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/User",
    name: "User",
    component: User,
  },
  {
    name: "Login",
    path: "/login",
    component: () =>
      import(/* webpackChunkName: "about" */ "../components/Login.vue"),
  },
  {
    path: "/AddUser",
    name: "AddUser",
    component: () =>
      import(/* webpackChunkName: "about" */ "../components/AddUser.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
