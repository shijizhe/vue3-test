import * as VueRouter from 'vue-router'

// 1. 定义路由组件
const testA = import('@/view/test/testA.vue')
const testB = import('@/view/test/testB.vue')
const Home = import('@/view/home/home.vue')

// 2. 定义一些路由
const routes = [
    { path: '/', redirect: '/home' },
    { path: '/home', component: () => Home },
    { path: '/testa', component: () => testA },
    { path: '/testb', component: () => testB },
]

// 3. 创建路由实例并传递 `routes` 配置
const router = VueRouter.createRouter({
    // 4. 使用 history 模式的实现。
    history: VueRouter.createWebHistory(),
    routes: routes, // `routes: routes` 的缩写
})

export default router
