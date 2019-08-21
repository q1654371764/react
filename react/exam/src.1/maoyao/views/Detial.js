import React, { Component } from 'react'
import isLogin from '../util/islogin'
class Detial extends Component {
  render() {
      let {match:{params}} = this.props;
      // console.log(this.props);
      console.log(params.id);
    return (
      <div>
          购票详情
      </div>
    )
  }
}


export default isLogin(Detial);