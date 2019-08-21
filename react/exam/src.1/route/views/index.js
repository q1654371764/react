import React, { Component } from 'react'

class Index extends Component {
  render() {
    return (
      <div>
          首页
          <a href="/list">跳转到list</a>
          <a href="/list/a">跳转到list</a>
      </div>
    )
  }
}


export default Index;