import React, { Component } from 'react'
import Emitter from '../util/emitter'
class B extends Component {
  render() {
    return (
      <div>
        b
        <button onClick={()=>{
            Emitter.emit('setTitle','点击b修改a的title')
        }}>点击修改a</button>
      </div>
    )
  }
}

export default B;