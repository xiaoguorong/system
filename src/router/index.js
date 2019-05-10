import Vue from 'vue'
import Router from 'vue-router'
import store from '../store';

Vue.use(Router)

var router = new Router({
    routes: [ 
		{
			path: '/',
			component: ()=>import('@/views/common/x-footer'),
			children: [
				{//首页
					name: 'index',
					path: '',
					meta: {
						pageTitle: '首页',
						tabBar:'1',
					},
					component: ()=>import('@/views/index')	
				},
				{//工作台
					path: 'workbench',	
					name: 'workbench',
					meta: {
						pageTitle: '工作台',
						tabBar:'2',
					},
					component: ()=>import('@/views/workbench')
				}
			]
		},
		{//教材
			path: '/teachingMaterial',
			component: ()=>import('@/views/common/x-footer'),
			children: [
				{//教材分类
					name: 'teachingMaterial',
					path: '',
					meta: {
						pageTitle: '教材',
						tabBar:'2',
					},
					component: ()=>import('@/views/teaching-material'),
				},
				{//教材列表 classId:分类id name:教材分类名称 type:教师用书还是教材 
					name: 'teachingMaterialItem',
					path: 'item/:classId/:name/:type',
					meta: {
						pageTitle: '教材',
						tabBar:'2',
					},
					component: ()=>import('@/views/teaching-material/item')
				},
				{//教材详情 key:七牛key name:教材名字 title:七牛title
					name: 'teachingMaterialDetail',
					path: 'detail/:name/:key/:title/:a',
					meta: {
						pageTitle: '教材',
						tabBar:'2',
					},
					component: ()=>import('@/views/teaching-material/detail')
				}
			]
		},
		{//个人中心
			path: '/userCenter',
			component: ()=>import('@/views/common/x-footer'),
			children: [
				{//个人中心	
					name: 'userCenter',
					path: '',
					meta: {
						pageTitle: '个人中心',
						tabBar:'3',
					},
					component: ()=>import('@/views/user/user-center'),
				},
				{//切换校区
					name: 'switchCampus',
					path: 'switchCampus',
					meta: {
						pageTitle: '切换校区',
						tabBar:'3',
					},
					component: ()=>import('@/views/user/switch-campus')
                },
				{//个人信息
					name: 'userInfo',
					path: 'userInfo',
					meta: {
						pageTitle: '个人信息',
						tabBar:'3', 
					},
					component: ()=>import('@/views/user/user-info')
                },
                {//修改密码
					name: 'changePassword',
					path: 'changePassword',
					meta: {
						pageTitle: '修改密码',
						tabBar:'3', 
					},
					component: ()=>import('@/views/user/change-password')
				},
			]
		},
		{//登录
			name: 'login',
			path: '/login',
			meta: {
				pageTitle: '登录',
				noLoginRequired: true
			},
			component: ()=>import('@/views/login')
		},
		{//找回密码
			name: 'findPassword',
			path: '/findPassword',
			meta: {
				pageTitle: '找回密码',
				noLoginRequired: true
			},
			component: ()=>import('@/views/find-password')
		}
	]
})

router.beforeEach((to, from, next) => {
    //更新机构id
		console.log(to)
		console.log("123456789")
    if(to.meta && to.meta.pageTitle){
      	store.dispatch("setHeaderName",to.meta.pageTitle)
    }
    //本地判断
	// 判断该路由是否需要登录权限
    if (!to.matched.some(record => record.meta && record.meta.noLoginRequired)){
		const token = window.localStorage.getItem('sys-token');
		//localStorage有token则视为登录
		if (token) {
			if (! store.state.token) {
				store.dispatch('setToken', token);
			}
			next();
			return;
		}
		//跳转到登录
		store.dispatch('clearLocalstroage');
		next({
			name: 'login',
			query: {redirect: to.fullPath} 
		});
		return;
    }
    next();
});

export default router
