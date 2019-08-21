import React, { Component } from 'react'
import getDataWrap from '../util/getDataWrap'

class Home extends Component {
  render() {
    console.log(this.props);
    return (
      <div>
          首页
      </div>
    )
  }
}


export default getDataWrap({
  url:'/api/home',
  type:'get'
})(Home);