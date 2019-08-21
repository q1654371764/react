import React, { Component } from 'react'
import {BrowserRouter as Router,Route,NavLink,Redirect,Switch} from 'react-router-dom';
import Index from './views/index';  // path /home Index
import List from './views/list'
import Type from './views/type'
//HashRouter hash模式的根组件
//BrowserRouter history模式的根组件

class RouterConfig extends Component {
  render() {
    return (
      <Router>
          {/* <Route path={'/'} exact component={()=><Redirect to="/index" />}></Route> */}
          <Switch>
            <Route path={'/index'} component={Index}></Route>
            <Route path={'/list'} component={List}></Route>
            <Route path={'/type'} component={Type}></Route>
            <Route path={'/my'} component={()=>{
              return <div>我的</div>
            }}></Route>
            <Redirect from={'/'} to={'/index'}></Redirect>
          </Switch>
          <footer>
              <NavLink to="/index">首页</NavLink>
              <NavLink to="/list">列表</NavLink>
              <NavLink to="/type">分类</NavLink>
              <NavLink to="/my">我的</NavLink>
          </footer>
      </Router>
    )
  }
  list(props){
    return <Route path="/list/a" component={List}></Route>
  }
}


export default RouterConfig;