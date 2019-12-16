import Vue from 'vue'
import VueRouter from 'vue-router'
import Landing from '../views/landing.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'landing',
    component: Landing
  },
  {
    path: '/:id',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "result" */ '../views/result.vue'),
    children: [
      {
        path: 'export',
        name: 'result-export',
        component: () => import(/* webpackChunkName: "result-export" */ '../views/result-export.vue')
      },
      {
        path: 'note',
        name: 'result-note',
        component: () => import(/* webpackChunkName: "result-note" */ '../views/result-note.vue')
      },
      {
        path: 'references',
        name: 'result-references',
        component: () => import(/* webpackChunkName: "result-references" */ '../views/result-references.vue'),
        children: [
          { path: 'list', name: 'result-references-list' },
          { path: ':focusId', name: 'result-references-focus' }
        ]
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
