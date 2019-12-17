import Vue from 'vue'
import VueRouter from 'vue-router'
import Landing from '../views/landing.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'landing',
    component: Landing,
  },
  {
    path: '/:id',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "object" */ '../views/object.vue'),
    children: [
      {
        path: 'export',
        name: 'object-export',
        component: () => import(/* webpackChunkName: "object-export" */ '../views/object-export.vue'),
      },
      {
        path: 'note',
        name: 'object-note',
        component: () => import(/* webpackChunkName: "object-note" */ '../views/object-note.vue'),
      },
      {
        path: 'references',
        name: 'object-references',
        component: () => import(/* webpackChunkName: "object-references" */ '../views/object-references.vue'),
        children: [
          { path: 'list', name: 'object-references-list' },
          { path: ':focusId', name: 'object-references-focus' },
        ],
      },
    ],
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})

export default router
