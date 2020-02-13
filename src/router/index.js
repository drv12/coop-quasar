import Vue from 'vue'
import VueRouter from 'vue-router'

import routes from './routes'

Vue.use(VueRouter)

/*
 * If not building with SSR mode, you can
 * directly export the Router instantiation;
 *
 * The function below can be async too; either use
 * async/await or return a Promise which resolves
 * with the Router instance.
 */

export default function ({store}) {
  const Router = new VueRouter({
    scrollBehavior: () => ({ x: 0, y: 0 }),
    routes,

    // Leave these as they are and change in quasar.conf.js instead!
    // quasar.conf.js -> build -> vueRouterMode
    // quasar.conf.js -> build -> publicPath
    mode: process.env.VUE_ROUTER_MODE,
    base: process.env.VUE_ROUTER_BASE
  })

  Router.beforeEach((to,from, next) => {
    to.matched.some( route =>{
      let dsg = store.getters['store/Designation']
  
      if(route.meta.requiresAdmin){
        if(dsg == 'Admin'){
          next()
        } else {
          next ({ path: '/'})
        }
      }
  
      if(route.meta.requiresCollector){
        console.log('Collector')
        if(dsg == 'Collector'){
          next()
        } else {
          next ({ path: '/'})
        }
      }

      if(route.meta.requiresMember){
        if(dsg == 'Driver'){
          next()
        } else {
          console.log('Member')
          next (
            { path: '/'})
        }
      }

      next()
    })
  })

  // store.dispatch('store/handleAuthStateChanged').then(() => {
  //   console.log(store.getters['store/isAdmin'])
    // if(store.getters['store/isAdmin']){
    //     Router.push('/admin/dashboard')
    // }
    // if(store.getters['store/isDriver'])
    // {
    //   Router.push('/member/dashboard')
    // }
    // if(store.getters['store/isCollector']){
    //   Router.push('/admin/dashboard')
    // }
    // if(store.getters['store/isOperator'])
    // {
    //   Router.push('/member/dashboard')
    // }
    // Router.beforeEach((to, from, next) => {
    //   if (to.matched.some(record => record.meta.isDesignation)) {
    //     let authenticated = store.getters['store/Designation']
    //     console.log('isAdmin', authenticated)
    //     if (authenticated == 'Admin') {
    //       next({
    //         path: '/admin/dashboard',
    //         query: { redirect: to.fullPath}
    //       })
    //     } else if (authenticated == 'Collector') {
    //       next({
    //         path: '/admin/dashboard',
    //         query: { redirect: to.fullPath}
    //       })
    //     } else if (authenticated == 'Driver') {
    //       next({
    //         path: '/member/dashboard',
    //         query: { redirect: to.fullPath}
    //       })
    //     } else if (authenticated == 'Operator') {
    //       next({
    //         path: '/member/dashboard',
    //         query: { redirect: to.fullPath}
    //       })
    //     }
    //   } else {
    //     next()
    //   }
    // })

  // })

  // Router.beforeEach((to, from, next) => {
  //   if (to.matched.some(record => record.meta.isAdmin)) {
  
  //     let authenticated = store.getters['store/isCollector']
      
  //     if (!authenticated) {
  //       next({
  //         path: '/admin/dashboard',
  //         query: { redirect: to.fullPath }
  //       })
  //     } else {
  //       next()
  //     }
  //   } else {
  //     next()
  //   }
  // })

  // Router.beforeEach((to, from, next) => {
  //   if (to.matched.some(record => record.meta.isDriver)) {
  //     let authenticated = store.getters['store/isDriver']
  //     console.log('isDriver', authenticated)
  //     if (!authenticated) {
  //       next({
  //         path: '/member/dashboard',
  //         query: { redirect: to.fullPath }
  //       })
  //     } else {
  //       next()
  //     }
  //   } else {
  //     next()
  //   }
  // })

  // Router.beforeEach((to, from, next) => {
  //   if (to.matched.some(record => record.meta.isAdmin)) {
  
  //     let authenticated = store.getters['store/isOperator']
      
  //     if (!authenticated) {
  //       next({
  //         path: '/admin/dashboard',
  //         query: { redirect: to.fullPath }
  //       })
  //     } else {
  //       next()
  //     }
  //   } else {
  //     next()
  //   }
  // })

  return Router
}

