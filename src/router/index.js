import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const login = r => require.ensure([], () => r(require('@/page/login')), 'login');
const home = r => require.ensure([], () => r(require('@/page/home')), 'home');

export default new Router({
	routes: [
		{
			path: '/',
			component: login
		},
		{
			path: '/manage',
			component: home,
			children: []
		}
	]
})
