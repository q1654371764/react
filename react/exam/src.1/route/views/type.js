import React, { Component } from 'react'
import {NavLink,Route,Redirect,Switch} from 'react-router-dom'
import Right from './Right'
class Type extends Component {
  render() {
    return <div>
          <ul>
             <li><NavLink to="/type/clothes">服装</NavLink></li>
             <li><NavLink to="/type/food">食品</NavLink></li>
          </ul>
          <div>
            <Switch>
                <Route path="/type/clothes" component={Right}></Route>
                <Route path="/type/food" component={Right}></Route>
                <Redirect from={'/type'} to={'/type/clothes'}></Redirect>
            </Switch>
          </div>
      </div>
  }
}


export default Type;