import React, { Component } from 'react'
import getDataWrap from '../util/getDataWrap'
class Type extends Component {
  render() {
    console.log(this.props);
    return (
      <div>
          分类
      </div>
    )
  }
}
Type = getDataWrap({
  url:'/api/type',
  type:'post'
})(Type)

export default Type;