import React, { Component } from 'react'
import Content from './components/Item'
import Commit from './components/Commit'
class Index extends Component {
  render() {
    return (
      <div className="listbox">
          <Commit />
          <Content />
      </div>
    )
  }
}


export default Index;