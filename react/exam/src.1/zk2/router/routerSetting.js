import React from 'react';
import Loadable from 'react-loadable';
import Finds from '../component/el-find'
import Like from '../component/el-like'
function Loading(){
    return <div>loading...</div>
}
const Home = Loadable({
    loading:Loading,   //异步组件加载完成之前显示的loading
    loader:()=>import('../views/home')  //真正加载的异步组件
});
const Type = Loadable({
    loading:Loading,   //异步组件加载完成之前显示的loading
    loader:()=>import('../views/type')  //真正加载的异步组件
});
const Find = Loadable({
    loading:Loading,   //异步组件加载完成之前显示的loading
    loader:()=>import('../views/find')  //真正加载的异步组件
});
export default [
    {
        path:'/home',
        component:Home
    },
    {
        path:'/type',
        component:Type
    },
    {
        path:'/find',
        component:Find,
        children:[
            {
                path:'/find',
                redirect:'/find/finds'
            },
            {
                path:'/find/finds',
                component:Finds
            },
            {
                path:'/find/like',
                component:Like
            }
        ]
    },
    {
        path:'/shop',
        component:()=><div>购物</div>
    },
    {
        path:'/my',
        component:()=><div>我的</div>
    },
    {
        path:'/', 
        redirect:'/home'
    }
]