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
      let dsg = localStorage.getItem('Designation')

      if(route.meta.requiresAuth){
        if(dsg != ''){
          next(
            { path: '/'}
          )
        } else {
          next (
            { path: '/'}
          )
        }
      }
  
      if(route.meta.requiresAdmin){
        console.log('isadmin: ',dsg)
        if(dsg == 'Admin'){
          next()
        } else {
          next (
            { path: '/'}
          )
        }
      }
  
      if(route.meta.requiresCollector){
        console.log('Collector')
        if(dsg == 'Collector'){
          next()
        } else {
          next (
            { path: '/'}
          )
        }
      }

      if(route.meta.requiresMember){
        if(dsg == 'Driver' || dsg == 'Operator'){
          next()
        } else {
          console.log('Member')
          next (
            { path: '/'}
            )
        }
      }

      next()
    })
  })
  return Router
}

