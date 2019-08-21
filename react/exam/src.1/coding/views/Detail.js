import React, { Component } from 'react'

export default class Detail extends Component {
  render() {
      let {match:{params}} = this.props;
    return (
      <div>
        这是详情页{params.objectId}
      </div>
    )
  }
}
