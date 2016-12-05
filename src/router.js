const routes = [
    {
        path: '/login',
        name: 'login',
        component: require('./components/login/login.vue')
    },
    {
        path: '/home',
        name: 'home',
        component: require('./components/Layout/layout.vue')
    }
]
export default routes
