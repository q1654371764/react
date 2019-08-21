import React, { Component } from 'react'
import connect from '../util/connect'

class WrapB extends Component {
  render() {
      console.log(this.props);
    return (
      <div>
        wrapb
      </div>
    )
  }
}
let mapStateToProps = state=>{
    return state.wrapb;
}


export default connect(mapStateToProps)(WrapB);