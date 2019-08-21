// import Detial from "../views/Detial";
import Movie from '../views/movie/Movie'
import Cinema from '../views/Cinema'
import My from '../views/My'
import Search from '../views/Search'
import Detail from '../views/Detial'
import Login from '../views/Login'
import Hot from '../views/movie/view/Hot'
import Ing from '../views/movie/view/Ing'
export default [
        {
            path:'/',
            redirect:'/movie'
        },
        {
            path:'/movie',
            component:Movie,
            children:[
                {
                    path:'/movie/hot',
                    component:Hot
                },
                {
                    path:'/movie',
                    redirect:'/movie/hot'
                },
                {
                    path:'/movie/ing',
                    component:Ing
                }
            ]
        },
        {
            path:'/my',
            component:My
        },
        {
            path:'/cinema',
            component:Cinema
        },
        {
            path:'/login',
            component:Login
        },
        {
            path:'/search',
            component:Search
        },
        {
            path:'/detail/:id',
            component:Detail
        }
]

// Router-view
