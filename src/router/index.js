import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";

/**
 * 路由说明
 * path:路由映射
 * name:路由名称
 * component:路由组件
 * showhidden:是否显示页面
 * children：子路由存储
 */
const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
