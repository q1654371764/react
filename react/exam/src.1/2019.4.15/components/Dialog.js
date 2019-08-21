import React, { Component } from 'react'

class Dialog extends Component {
  state = {
    text:this.props.itemTitle
  }
  render() {
    let {typeItem,typeDialog,dialogClose} = this.props;
    let {text} = this.state;
    return (
      <div className="dialogmask" onClick={(e)=>{
         (e.target === e.currentTarget) && dialogClose();
      }}>
          <div className="dialogcont">
              <h2>{typeDialog === 0 ? '重命名文档'  : '删除文档'}<span onClick={()=>{
                dialogClose();
              }}>&times;</span></h2>
              <div>
                {typeDialog === 0 ? <input type="text" value={text} onChange={(e)=>{
                  this.setState({text:e.target.value})
                }} placeholder="输入标题" />  : '确定要删除文档吗？'}
              </div>
              <div>
                <button onClick={()=>{
                  this.sureClick(typeItem,typeDialog)
                }}>确定</button>
                <button onClick={()=>{
                  dialogClose();
                }}>取消</button>
              </div>
          </div>
      </div>
    )
  }
  sureClick(id,typeDialog){
    let {dialogSet} = this.props;
    let {text} = this.state;
    dialogSet({text,id,typeDialog})
  }
}


export default Dialog;