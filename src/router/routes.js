
const routes = [
  {
    path: '/',
    component: () => import('layouts/MyLayout.vue'),
    children: [
      { path: '/home', component: () => import('pages/Home.vue') },
      { path: '/services', component: () => import('pages/Services.vue') }    
    ]
  },
  {
    path: '/dashboard',
    component: () => import('layouts/Layout2.vue'),
    children: [
      { path: '/xx/homex', component: () => import('pages/Home.vue') },
      { path: '/xx/servicesx', component: () => import('pages/Services.vue') }    
    ]
  },
  {
    path: '/login',
    component: () => import('layouts/Login.vue') 
  }
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes
