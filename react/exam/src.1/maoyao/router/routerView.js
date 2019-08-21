import React, { Component } from 'react'
import {Route,Switch,Redirect} from 'react-router-dom';
import Movie from '../views/movie/Movie'
import Cinema from '../views/Cinema'
import My from '../views/My'
import Search from '../views/Search'
import Detail from '../views/Detial'
import Login from '../views/Login'
class RouterView extends Component {
  render() {
      let {routes} = this.props;
      let redirectArr = routes.filter(item=>item.redirect)
      let redirectCom = redirectArr.map((item,key)=><Redirect key={key} to={item.redirect} from={item.path} />)
    return (
        <Switch> 
            {
                routes.map((val,key)=>{
                    if(!val.redirect){
                        console.log(val.children);
                       return <Route key={key} path={val.path} render={(props)=>{
                           return <val.component children={val.children} router={props} />
                       }} />
                    }
                }).concat(redirectCom)
            }
        </Switch>
    )
  }
}

export default RouterView;