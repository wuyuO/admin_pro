const routes = [
  {
    path: '/login',
    name: 'login',
    component: require('./components/Login/login.vue')
  },
  {
    path: '/register',
    name: 'register',
    component: require('./components/Login/register.vue')
  },
  {
    path: '/forgetpwd',
    name: 'forgetpwd',
    component: require('./components/Login/forgetpwd.vue')
  },
  {
    path: '/ui/user/pwd/reset',
    name: 'resetPwd',
    component: require('./components/Login/resetPwd.vue')
  },
  {
    path: '/ui/user/mail/active',
    name: 'resetPwd',
    component: require('./components/Login/active.vue')
  },
  {
    path: '/',
    name: 'home',
    component: require('./components/Layout/layout.vue'),
    children: [
      {
        path: 'resetPwd',
        component: require('./components/User/resetPwd.vue')
      },
      {
        path: 'userInfo',
        component: require('./components/User/userInfo.vue')
      }
    ]
  }
]
export default routes
