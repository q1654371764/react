import React, { Component } from 'react'
import connect from '../util/connect'
import WrapA from './a'
class Wrap extends Component {
  render() {
      console.log(this.props);
    return (
      <div>
            <WrapA/>
      </div>
    )
  }
}


export default connect(
    state=>{
        return state.wrap
    }
)(Wrap);