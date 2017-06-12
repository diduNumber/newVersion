//引入模块
import Vue from 'vue'

//引入router
import VueRouter from 'vue-router'
//可以在任意网页中使用
Vue.use(VueRouter)

//导入需要的组件
import Home from '../pages/Home'
import Kiss from '../pages/Kiss'
import Global from '../pages/Global'
import Gift from '../pages/Gift' 
import Mother from '../pages/Mother'
import Room from '../pages/room'
import Mine from '../pages/Mine'
import MineList from '../pages/MineList'
import One from '../pages/One'
import Two from '../pages/Two'
import Three from '../pages/Three'
import Fore from '../pages/Fore'
import Shopping from '../pages/shopping'
//定义路由规则
const routes = [
    {path: '', component: Home},
    {path: '/home', component: Home},
    {path: '/kiss', component: Kiss},
    {path: '/global', component: Global},
    {path: '/mother', component: Mother},
    {path: '/gift', component: Gift},
    {path:'/room/:id', component:Room},
    {path:'/mine', component:Mine},
    {path:'/shopping', component:Shopping},
    {path:'/mineList',component:MineList
    ,children:[
    	{ path: '', component: One },
      	{ path: 'one', component: One },
	    { path: 'two', component: Two },
	    { path: 'three', component: Three },
	    { path: 'fore', component: Fore }
    ]
	}
];
//导出创建好的路由对象
export default new VueRouter({
	routes
}); 