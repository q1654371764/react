import React, { Component } from 'react'
import {BrowserRouter as Router} from 'react-router-dom';
import RouterView from './routerView'
import routes from './routerSetting'
import '../css/common.css';
console.log(routes);
class RouterConfig extends Component {
  render() {
    return (
      <Router>
          <RouterView routes={routes}/>
      </Router>
    )
  }
}

//component React.createElement
//render render 渲染当前组件


export default RouterConfig;