import React, { Component } from 'react'
import Emitter from '../util/emitter'
class A extends Component {
    state = {
        title:'a'
    }
  render() {
    return (
      <div>
        {this.state.title}
      </div>
    )
  }
  componentDidMount(){
    Emitter.on('setTitle',title=>{
        this.setState({title})
    })
  }
}

export default A;