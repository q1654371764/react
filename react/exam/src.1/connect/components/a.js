import React, { Component } from 'react'
import connect from '../util/connect'
class WrapA extends Component {
  render() {
      console.log(this.props);
    return (
      <div>
         
      </div>
    )
  }
}


export default connect(
    state=>{
        return state.wrapa
    }
)(WrapA);