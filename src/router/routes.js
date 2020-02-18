const routes = [
  {
    path: '/',
    component: () => import('layouts/WebLayout.vue'),
    redirect: '/home',
    children: [
      { path: '/home', component: () => import('pages/PublicPages/Home.vue') },
      { path: '/about', component: () => import('pages/PublicPages/About.vue') },
      { path: '/preregister', component: () => import('pages/PublicPages/Preregister.vue') },
      { path: '/services', component: () => import('pages/PublicPages/Services.vue') },
      { path: '/query', component: () => import('pages/PublicPages/QueryTest.vue') }    
    ]
  },
  {
    path: '/dashboard',
    redirect: '/member/dashboard',
    // meta: {requiresMember: true},
    component: () => import('layouts/MemberLayout.vue'),
    children: [
      { 
        path: '/member/dashboard', 
        component: () => import('pages/MemberPages/Dashboard.vue') 
      },
      { 
        path: '/member/dailypayment', 
        component: () => import('pages/MemberPages/DailyPayment.vue')
      },
      { 
        path: '/member/savingsdeposit', 
        component: () => import('pages/MemberPages/SavingsDeposit.vue')
      },
      { 
        path: '/member/loan', 
        component: () => import('pages/MemberPages/MemberLoan.vue')
      },

    ]
  },
  {
    path: '/dashboard',
    redirect: '/collector/dashboard',
    //: {requires: true},
    component: () => import('layouts/CollectorLayout.vue'),
    children: [
      { 
        path: '/collector/dashboard', 
        component: () => import('pages/CollectorPages/DashboardCollector.vue') 
      },
      { 
        path: '/collector/addpayment', 
        component: () => import('pages/CollectorPages/AddPaymentCollector.vue') 
      },
      { 
        path: '/collector/dailycollections', 
        component: () => import('pages/CollectorPages/CollectorDailyCollections.vue') 
      },
      { 
        path: '/collector/membersmonitor', 
        component: () => import('pages/CollectorPages/MembersMonitoring.vue') 
      },

    ]
  },
  {
    path: '/login',    
    meta: {requiresAuth: true},
    component: () => import('pages/PublicPages/Login.vue') 
  },
  {
    path: "/admin",
    component: () => import("layouts/AdminLayout.vue"),
    // meta: {requiresAdmin: true},
    redirect: '/admin/dashboard',
    children: [
      {
        path: "/admin/pendingregform/:penRegId",
        props:true,
        component: () => import("pages/AdminPages/PendingRegForm.vue")
      },
      {
        path: "/admin/pendingreg",
        component: () => import("pages/AdminPages/PendingReg.vue")
      },
      {
        path: "/admin/dashboard",
        component: () => import("pages/AdminPages/Dashboard.vue")
      },
      {
        path: "/admin/profile/:penRegId",
        props: true,
        component: () => import("pages/AdminPages/AdminMemProfile.vue")
      },
      {
        path: "/admin/addmember/",
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
        path: "/admin/savings",
        component: () => import("pages/AdminPages/Savings.vue")
      },
      {
        path: "/admin/loans",
        component: () => import("pages/AdminPages/Loans.vue")
      },
      {
        path: "/admin/billings",
        component: () => import("pages/AdminPages/Billings.vue")
      },
      {
        path: "/admin/addstaff",
        component: () => import("pages/AdminPages/AddStaff.vue")
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
