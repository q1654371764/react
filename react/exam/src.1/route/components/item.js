import React, { Component } from 'react'
import {withRouter} from 'react-router-dom'
class Item extends Component {
  render() {
      console.log(this.props);
    return (
      <div>
        item
      </div>
    )
  }
}
export default withRouter(Item);