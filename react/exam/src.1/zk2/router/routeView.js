import React,{Component} from 'react';
import {Route,Redirect,Switch} from 'react-router-dom';
class RouterView extends Component{
    render(){
        let {route} = this.props;
        //[{com}]
        //提取重定向
        let redirectarr = route.filter(item=>item.redirect);
        //生成重定向组件
        let redirectCom = redirectarr.map((item,i)=><Redirect key={i} from={item.path} to={item.redirect} />);
        //[<Reirect>]
        return <Switch>
        {
            route.map((item,key)=>!item.redirect && <Route path={item.path} render={
                (props)=><item.component {...props} childrenroute={item.children} />
            } key={key} />).concat(redirectCom)
        }
        </Switch>
    }
}

export default RouterView;