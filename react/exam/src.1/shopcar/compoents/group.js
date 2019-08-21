import React, { Component } from 'react'
import Checkbtn from './checkbtn'
import ShopItem from './shopitem'
class Group extends Component {
  render() {
      let {data,groupindex} = this.props;
    return (
      <div>
          <h2>
                <Checkbtn checked={data.check} groupindex={groupindex} />
                {data.title}
          </h2>
          {
              data.shopItem.map((item,key)=><ShopItem data={item} key={key} itemindex={key} groupindex={groupindex} />)
          }
      </div>
    )
  }
}


export default Group;