import Vue from 'vue'
import Router from 'vue-router'
// import store from '@/vuex/store'


import index from '@/component/home/home'
import list from '@/component/list/list'
import listDL from '@/component/list/estate-listDL'
import listLH from '@/component/list/estate-listLH'
import detail from '@/component/list/detail'
import detailLH from '@/component/list/detailLH'
import entrust from '@/component/entrust/entrust'
import owner from '@/component/owner/owner'
import Employers from '@/component/emp/Employers'
import Emiao from '@/component/emp/Emiao'
import Propety from '@/component/emp/Property'
import Media from '@/component/emp/Media'
import Build from '@/component/emp/Build'
import Law from '@/component/emp/Law'
import Ysb from '@/component/emp/Ysb'
import Adver from '@/component/emp/Adver'

Vue.use(Router);

const routes = [
  {
    path: '*', redirect: '/404'
  },
  {
    path: '/', redirect: { name: 'index' }
  },
  {
    path: '/index',
    name: 'index',
    component: index,
  },
  {
    path: '/tenement',
    name: 'list',
    component: list,
  },
  {
    path: '/tenement/estate/list/:type/:id',
    name: 'listDL',
    component: listDL,
  },
  {
    path: '/tenement/estate/listLH/:type/:id',
    name: 'listLH',
    component: listLH,
  },
  {
    path: '/tenement/details',
    name: 'detail',
    component: detail
  },
  {
    path: '/tenement/detailsLH',
    name: 'detailLH',
    component: detailLH
  },
  {
    path: '/entrust',
    name: 'entrust',
    component: entrust
  },
  {
    path: '/owner',
    name: 'owner',
    component: owner
  },
  {
        path: '/employers',
        name: 'Employers',
        component: Employers,
    },
    {
        path: '/emiao',
        name: 'Emiao',
        component: Emiao,
    },
    {
        path: '/propety',
        name: 'Propety',
        component: Propety,
    },
     {
        path: '/media',
        name: 'Media',
        component: Media,
    },
    {
        path: '/build',
        name: 'Build',
        component: Build,
    },
    {
        path: '/law',
        name: 'Law',
        component: Law,
    },
     {
        path: '/ysb',
        name: 'Ysb',
        component: Ysb,
    },
     {
        path: '/adver',
        name: 'Adver',
        component: Adver,
    }
];



const router = new Router({
  // mode: 'history',
  routes
});




export default router

