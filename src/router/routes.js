
const routes = [
  {
    path: '/',
    component: () => import('layouts/WebLayout.vue'),
    redirect: '/home',
    children: [
      { path: '/home', component: () => import('pages/PublicPages/Home.vue') },
      { path: '/about', component: () => import('pages/PublicPages/About.vue') },
      { path: '/services', component: () => import('pages/PublicPages/Services.vue') }    
    ]
  },
  {
    path: '/dashboard',
    component: () => import('layouts/MemberLayout.vue'),
    children: [
      { path: '/member/dashboard', component: () => import('pages/MemberPages/Dashboard.vue') },
      { path: '/member/profile', component: () => import('pages/MemberPages/Profile.vue')},
      { path: '/member/investment', component: () => import('pages/MemberPages/Investment.vue')}    
    ]
  },
  {
    path: '/login',
    component: () => import('pages/PublicPages/Login.vue') 
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
