import React, { Component } from 'react'

export default class RightList extends Component {
  render() {
     let {rightnav,clickNav} = this.props;
    return (
      <nav>
         {
             rightnav.map(item=><span key={item.id}
             onClick={()=>{
                clickNav(item.id)
             }}>{item.title}</span>)
         }
      </nav>
    )
  }
}
