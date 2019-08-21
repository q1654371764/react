import React, { Component } from 'react'

class Table extends Component {
    
  render() {
      let {data,changeBigImage,index} = this.props;
    return (
      <div className="tablebox">
          {
              data.map((item,key)=><div key={key} className={key===index?'active':''} onMouseOver={()=>{
                changeBigImage(key)
              }}><img src={item.min}/></div>)
          }
      </div>
    )
  }
}


export default Table;