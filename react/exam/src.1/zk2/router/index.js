import React,{Component} from 'react'
import {BrowserRouter as Router,NavLink} from 'react-router-dom'
import route from './routerSetting';
import RouterView from './routeView'


// function loaded(options){ //要不要有自己的状态
//     let {Loading,asyncCompoent} = options;
//     return class extends Component{
//         state = {
//             flag:false, //没有加载完成
//             TargetComponent:function(){
//                 return <div></div>
//             }
//         }
//         render(){
//             let {flag,TargetComponent} = this.state;
//             return !flag ? <Loading /> : <TargetComponent/>  //null最终要输出的是一个异步组件
//         }
//         componentDidMount(){
//            asyncCompoent().then(res=>{
//                this.setState({TargetComponent:res.default,flag:true})
//            })
//         }
//     }
// }



class Index extends Component{
    render(){
        // console.log()
        return <Router>
            <main>
                    {
                       <RouterView route={route}/>
                    }
                    
                    {/* [<Route path={"/home"} component={Home} />
                    <Route path={"/type"} component={Type}/>
                    <Route path={"/find"} component={Find}/>
                    <Route path={"/shop"} render={()=><div>购物</div>}/>
                    <Route path={"/my"} render={()=><div>我的</div>}/>
                    <Redirect from={'/'} to={'/home'}></Redirect>]
                     */}
                
            </main>
            <footer>
                <NavLink to="/home">首页</NavLink>
                <NavLink to="/type">分类</NavLink>
                <NavLink to="/find">发现</NavLink>
                <NavLink to="/shop">购物</NavLink>
                <NavLink to="/my">我的</NavLink>
            </footer>
        </Router>
    }
}

export default Index;