import VueRouter from "vue-router";
import Vue from "vue";

Vue.use(VueRouter);

import Content01 from '../components/Content01'
import Content02 from '../components/Content02'
import Content03 from '../components/Content03'
const routes = [
    {
        path: '/Content02',
        name: 'Content02',
        component: Content02
    },
    {
        path: '/',
        name: 'Content01',
        component: Content01
    },
    {
        path: '/Content03',
        name: 'Content03',
        component: Content03
    }
]

const router = new VueRouter({
    routes,
    mode: "history"
})

export default router;