import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const replaceRoute = VueRouter.prototype.push

VueRouter.prototype.push = (position,resolve,reject) => {
    if (resolve && reject) {
        replaceRoute.call(this,position,resolve,reject)
    } else {
        replaceRoute.call(this,position,() => {}, () => {})
    }
}

export default new VueRouter({
    mode: 'history',
    routes:[
        {
            path: '*',
            redirect: '/home'
        },
        {
            path: '/home',
            component: () => import('@/views/Home'),
            meta : {
                isheadershow : true,
            }
        },
        {
            path : "/login",
            component : () => {
                return import ("@/components/login_new");
            },
            meta : {
                isheadershow : false,
            }
        },
        {
            path : "/register",
            component : ()=>{
                return import ("@/components/register");
            },
            meta : {
                isheadershow : false,
            }
        },
        {
            path : "/foot",
            component : ()=>{
                return import ("@/components/foot");
            },
            meta : {
                isheadershow : false,
            }
        }
    ]
})