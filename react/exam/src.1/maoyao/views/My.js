import React, { Component } from 'react'
import Foot from '../components/Foot'
import Head from '../components/Head'
import isLogin from '../util/islogin'

class My extends Component {
  render() {
      console.log(this.props);
    return (
      <div>
            <Head title="我的"/>
            <main>
                我的
            </main>
            <Foot />
      </div>
    )
  }
}


export default isLogin(My);