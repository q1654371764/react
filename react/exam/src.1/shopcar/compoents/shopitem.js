import React, { Component } from 'react'
import Checkbtn from './checkbtn'
import Computed from './computed'
class Shopitem extends Component {
  render() {
    let {data,itemindex,groupindex} = this.props;
    return (
      <div>
          <Checkbtn checked={data.check} itemindex={itemindex} groupindex={groupindex}/>
          <b>{data.title}</b>
          <p>￥{data.price}</p>
          <Computed count={data.count} itemindex={itemindex} groupindex={groupindex}/>
      </div>
    )
  }
}

export default Shopitem;
