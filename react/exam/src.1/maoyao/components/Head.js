import React, { Component } from 'react'
// import {Link} from 'react-router-dom'
class Head extends Component {
    static defaultProps = {
        back:false,
        title:'猫眼电影'
    }
  render() {
      let {back,title} = this.props;
    return (
      <header className="header">
        {back && <span>&lt;</span>}
        <span>{title}</span>
      </header>
    )
  }
}

export default Head;