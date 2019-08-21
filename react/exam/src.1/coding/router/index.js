import React, { Component } from 'react'
import {BrowserRouter as Router,Route,Switch,Redirect} from 'react-router-dom'
import routerData from './routersetting'
class RouterIndex extends Component {
  render() {
      let redirect = routerData.filter(val=>val.redirect);
      let redirectCom = redirect.map((item,key)=><Redirect key={key} from={item.path} to={item.redirect} />);
    return (
      <Router>
          <Switch>
              {
                routerData.map((val,key)=>!val.redirect && <Route key={key} path={val.path} render={props=>{
                    return React.createElement(val.component,{...props});
                }}></Route>).concat(redirectCom)  
              }
          </Switch>
      </Router>
    )
  }
}


export default RouterIndex