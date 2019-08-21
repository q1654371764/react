import Content from '../views/Content'
import Detail from '../views/Detail'
const routerData = [
    {
        path:'/',
        redirect:'/all'
    },
    {
        path:'/all',
        component:Content
    },
    {
        path:'/create',
        component:Content
    },
    {
        path:'/share',
        component:Content
    },
    {
        path:'/end',
        component:Content
    },
    {
        path:'/detail/:objectId',
        component:Detail
    }
]

export default routerData;