import {createRouter,createWebHistory} from 'vue-router';

const router = createRouter({
    history: createWebHistory(),
    routes:[
        {
            // 重定向到home
            path:'/',
            redirect:'/home'
        },
        {
            path:'/:pathMatch(.*)',
            redirect:'/home'
        },
        {
            path:'/home',
            name:'home',
            component:()=>import('@/views/home.vue'),
            meta:{
                'title':'首页'
            }
        },
        {
            path:'/login',
            name:'login',
            component:()=>import('@/views/Login.vue'),
            meta:{
                'title':'登录'
            }
        },
        {
          path:'/UserManage',
          name:'UserManage',
          component:()=>import('@/views/UserManagement.vue')
        },
        {
            path:'/SystemManagement',
            name:'SystemMan',
            component:()=>import('@/views/SystemManagement.vue')
        },
    ]
})

export default router
