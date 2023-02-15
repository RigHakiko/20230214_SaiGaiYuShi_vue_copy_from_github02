import VueRouter from "vue-router";
import Vue from "vue";

Vue.use(VueRouter);

import Content01 from '../components/Content01'
import Content02 from '../components/Content02'
const routes = [
    {
        path: '/Content02',
        name: 'Content02',
        component: Content02
    }
]

const router = new VueRouter({
    routes,
    mode: history
})

export default router;