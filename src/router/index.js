import Vue from 'vue'
import Router from 'vue-router'
import HomeView from '@/components/home/HomeView'
import ListView from '@/components/list/ListView'
import HistoryView from '@/components/history/HistoryView'
import ConfigView from '@/components/config/ConfigView'
import FavView from '@/components/fav/FavView'
import AlView from '@/components/article/AlView'

Vue.use(Router)

export default new Router({
	routes: [{
			path: '/',
			component: HomeView
		},
		{
			path: '/home',
			component: HomeView
		},
		{
			path: '/fav',
			component: FavView
		},
		{
			path: '/history',
			component: HistoryView
		},

		{
			path: '/config',
			component: ConfigView
		},
		{
			path: '/list/:id',
			component: ListView
		},
		{
			path: '/aiv',
			component: AlView
		}
	]
})