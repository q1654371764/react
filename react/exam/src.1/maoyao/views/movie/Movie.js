import React, { Component } from 'react'
import Foot from '../../components/Foot'
import Head from '../../components/Head'
import {NavLink,Route,Switch,Redirect} from 'react-router-dom';
import RouterView from '../../router/routerView'
export default class Movie extends Component {
  render() {
    let {router:{history:{push}},children} = this.props;
    // console.log(this.props);
    return (
      <div>
           <Head />
            <main>
                <nav>
                    <NavLink to="/movie/hot">正在热映</NavLink>
                    <NavLink to="/movie/ing">即将热映</NavLink>
                    <span onClick={()=>{
                      push('/search')
                    }}>搜索</span>
                </nav>
                <section>
                    <RouterView routes={children}/>
                    {/* <Switch>
                     
                      <Route path={"/movie/hot"} component={Hot}></Route>
                      <Route path={"/movie/ing"} component={Ing}></Route>
                      <Redirect from="/movie" to="/movie/hot"></Redirect>
                    </Switch> */}
                </section>
            </main>
            <Foot />
      </div>
    )
  }
}
