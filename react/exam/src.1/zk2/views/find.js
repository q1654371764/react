import React, { Component } from 'react'
import {NavLink} from 'react-router-dom'
import RouterView from '../router/routeView'
class Find extends Component {
  render() {
    let {childrenroute} = this.props;
    console.log(childrenroute);
    return (
      <div>
          <NavLink to={'/find/finds'}>发现</NavLink>
          <NavLink to={'/find/like'}>关注</NavLink>
          <section>
            <RouterView route={childrenroute}/>
            {/* <Switch>
              <Route path={'/find/finds'} component={Finds}></Route>
              <Route path={'/find/like'} component={Like}></Route>
              <Redirect from={'/find'} to={'/find/finds'}></Redirect>
            </Switch> */}
          </section>
      </div>
    )
  }
}


export default Find