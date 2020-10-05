import Vue from 'vue';
import Router from 'vue-router';
// import Login from './views/Login.vue';

Vue.use(Router);

export default new Router({
    mode: 'history',
    base: __dirname,
    routes: [{
        path: '/',
        name: 'home',
        component: () => import(/* webpackChunkName: "home" */ './../pages/Home.vue')
    },
    ],
});
