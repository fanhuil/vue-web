import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
	// 首页路由
	{
		path: '/',
		name: 'Home',
		component: Home
	},
	// 关于我路由
	{
		path: '/about',
		name: 'About',
		// route level code-splitting
		// this generates a separate chunk (about.[hash].js) for this route
		// which is lazy-loaded when the route is visited.
		component: () => import( /* webpackChunkName: "about" */ '../views/About.vue')
	},
	// 碎言碎语路由
	{
		path: '/Say',
		name: 'Say',
		component: () => import( /* webpackChunkName: "about" */ '../views/Say.vue')
	},
	// 个人日记路由
	{
		path:'/diary',
		name:'Diary',
		component: () => import( /* webpackChunkName: "about" */ '../views/Diary.vue')
	},
	// 相册路由
	{
		path:'/album',
		name:'Album',
		component: () => import( /* webpackChunkName: "about" */ '../views/Album.vue')
	},
	// 学无止境路由
	{
		path:'/learn',
		name:'Learn',
		component: () => import( /* webpackChunkName: "about" */ '../views/Learn.vue')
	},
	// 留言板路由
	{
		path:'/guestbook',
		name:'Guestbook',
		component: () => import( /* webpackChunkName: "about" */ '../views/Guestbook.vue')
	}
]

const router = new VueRouter({
	routes
})

export default router
