/** 导入路由 */
import { createRouter, createWebHashHistory } from "vue-router";

/**
 * 路由说明
 * path:路由映射
 * name:路由名称
 * component:路由组件
 * showhidden:是否显示页面
 * children：子路由存储
 */
const routes = [
  /** 系统主页 */
  {
    path: "/",
    showhidden:false,
    component: () => import("@/views/index.vue")
  },
  /** 异常页面 */
  {
    path: "/401",
    showhidden:false,
    component: () => import("@/views/system/error/401")
  },
  /** 未授权页面 */
  {
    path: "/403",
    showhidden:false,
    component: () => import("@/views/system/error/403")
  },
  /** 错误页面 */
  {
    path: "/404",
    showhidden:false,
    component: () => import("@/views/system/error/404")
  },
  {
    path:'/login',
    showhidden:true,
    component: () => import("@/views/system/login")
  }
];

/**
 * 创建路由
 * createWebHistory:创建历史记录模式的路由
 * createWebHashHistory:创建"哈希值"历史记录模式的路由
 * 在生产环境中,"哈希"模式可以正常访问，非"哈希"模式后端协助配置(白屏、404等)
 */
const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL), //创建哈希值路由
  routes
});

/**
 * 默认输出
 */
export default router;
