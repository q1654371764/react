import React, { Component } from 'react'
import {NavLink} from 'react-router-dom'
class Foot extends Component {
  render() {
    return (
      <footer className="footer">
          <NavLink to="/movie">电影</NavLink>
          <NavLink to="/cinema">影院</NavLink>
          <NavLink to="/my">我的</NavLink>
      </footer>
    )
  }
}


export default Foot;