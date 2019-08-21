import React, { Component } from 'react'
import {connect} from 'react-redux';
class Commit extends Component {
  render() {
    let {sendCommit} = this.props;
    return (
      <div>
        <input type="text" placeholder="请添加评论" onKeyDown={e=>{
            if(e.keyCode===13){
              sendCommit(e.target.value)
            }
        }}/>
      </div>
    )
  }
}


export default connect(
  state=>({}),
  dispatch=>{
    return {
      sendCommit(value){
        dispatch({
          type:'ADD_COMMIT',
          value
        })
      }
    }
  }
)(Commit)