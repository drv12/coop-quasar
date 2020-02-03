
const routes = [
  {
    path: '/',
    component: () => import('layouts/WebLayout.vue'),
    redirect: '/home',
    children: [
      { path: '/home', component: () => import('pages/PublicPages/Home.vue') },
      { path: '/about', component: () => import('pages/PublicPages/About.vue') },
      { path: '/preregister', component: () => import('pages/PublicPages/Preregister.vue') },
      { path: '/services', component: () => import('pages/PublicPages/Services.vue') }    
    ]
  },
  {
    path: '/dashboard',
    component: () => import('layouts/MemberLayout.vue'),
    children: [
      { path: '/member/dashboard', component: () => import('pages/MemberPages/Dashboard.vue') },
      { path: '/member/profile', component: () => import('pages/MemberPages/Profile.vue')},
      { path: '/member/transactions', component: () => import('pages/MemberPages/Transactions.vue')}    
    ]
  },
  {
    path: '/login',
    component: () => import('pages/PublicPages/Login.vue') 
  },
  {
    path: "/admin",
    component: () => import("layouts/AdminLayout.vue"),
    redirect: '/admin/dashboard',
    children: [
      {
        path: "/admin/dashboard",
        component: () => import("pages/AdminPages/Dashboard.vue")
      },
      {
        path: "/admin/addmember",
        component: () => import("pages/AdminPages/AddMember.vue")
      },
      {
        path: "/admin/allmember",
        component: () => import("pages/AdminPages/AllMember.vue")
      },
      {
        path: "/admin/addpayment",
        component: () => import("pages/AdminPages/AddPayment.vue")
      },
      {
        path: "/admin/allpayment",
        component: () => import("pages/AdminPages/AllPayment.vue")
      },
      {
        path: "/admin/depositwithdraw",
        component: () => import("pages/AdminPages/Deposit-Withdraw.vue")
      },
      {
        path: "/admin/alltransaction",
        component: () => import("pages/AdminPages/AllTransactions.vue")
      },
      {
        path: "/admin/jeepneys",
        component: () => import("pages/AdminPages/Jeepneys.vue")
      }
    ]
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
