import Vue from "vue";
import Router from "vue-router";
import Home from "./components/Home.vue";
import SignIn from "./components/SignIn.vue";
import SignUp from "./components/SignUp.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "*",
      redirect: "home"
    },
    {
      path: "/signin",
      name: "signin",
      component: SignIn
    },
    {
      path: "/home",
      name: "Home",
      component: Home,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: "/signup",
      name: "signup",
      component: SignUp
    }
  ]
});
