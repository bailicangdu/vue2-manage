import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const login = r => require.ensure([], () => r(require('@/page/login')), 'login');
const manage = r => require.ensure([], () => r(require('@/page/manage')), 'manage');
const home = r => require.ensure([], () => r(require('@/page/home')), 'home');
const addShop = r => require.ensure([], () => r(require('@/page/addShop')), 'addShop');
const addGoods = r => require.ensure([], () => r(require('@/page/addGoods')), 'addGoods');
const userList = r => require.ensure([], () => r(require('@/page/userList')), 'userList');
const shopList = r => require.ensure([], () => r(require('@/page/shopList')), 'shopList');
const area = r => require.ensure([], () => r(require('@/page/area')), 'area');
const adminList = r => require.ensure([], () => r(require('@/page/adminList')), 'adminList');
const visitor = r => require.ensure([], () => r(require('@/page/visitor')), 'visitor');
const newMember = r => require.ensure([], () => r(require('@/page/newMember')), 'newMember');
const uploadImg = r => require.ensure([], () => r(require('@/page/uploadImg')), 'uploadImg');
const uploadFile = r => require.ensure([], () => r(require('@/page/uploadFile')), 'uploadFile');
const adminSet = r => require.ensure([], () => r(require('@/page/adminSet')), 'adminSet');
const sendMessage = r => require.ensure([], () => r(require('@/page/sendMessage')), 'sendMessage');
const explain = r => require.ensure([], () => r(require('@/page/explain')), 'explain');


export default new Router({
	routes: [
		{
			path: '/',
			component: login
		},
		{
			path: '/manage',
			component: manage,
			children: [{
				path: '',
				component: home,
			},{
				path: '/addShop',
				component: addShop,
			},{
				path: '/addGoods',
				component: addGoods,
			},{
				path: '/userList',
				component: userList,
			},{
				path: '/shopList',
				component: shopList,
			},{
				path: '/area',
				component: area,
			},{
				path: '/adminList',
				component: adminList,
			},{
				path: '/visitor',
				component: visitor,
			},{
				path: '/newMember',
				component: newMember,
			},{
				path: '/uploadImg',
				component: uploadImg,
			},{
				path: '/uploadFile',
				component: uploadFile,
			},{
				path: '/adminSet',
				component: adminSet,
			},{
				path: '/sendMessage',
				component: sendMessage,
			},{
				path: '/explain',
				component: explain,
			}]
		}
	]
})
