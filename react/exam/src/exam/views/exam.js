import React, { Component } from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux';
import * as examAction from '../../store/exam/exam.action'
import '../css/style.css'
class ExamCont extends Component {
  render() {
      let {curData} = this.props; 
    //   console.log(curData.options);
      console.log('正确答案',curData.success,'正当选答案',curData.selected);
    return (
      <div>
          <h2>{curData.title}</h2>
          <ul>
              {
                curData.options && curData.options.map(item=>{
                   return <li key={item[1].id}>
                        <i className={
                            `
                             ${
                              curData.selected && curData.selected === item[1].id ? 'active' : ''
                             }
                             ${
                              curData.selected && curData.success === item[1].id ? 'successactive' : ''
                             } 
                             
                            `
                        } style={{
                          display:'inline-block',
                          width:15,
                          height:15,
                          borderRadius:'50%',
                          border:'1px solid #333'
                        }}
                        onClick={this.change.bind(this,item[1].id)}></i>
                        <span>{item[0]}:</span>
                        <span>{item[1].title}</span>
                   </li>
                })
              }
          </ul>
          <div>
            <button onClick={this.changeItem.bind(this,false)}>上一题</button>
            <button>收藏</button>
            <button onClick={this.changeItem.bind(this,true)}>下一题</button>
            <button>提交</button>
          </div>
      </div>
    )
  }
  change(id){
    let {index,submit,curData} = this.props;
    if(curData.selected){ //已经答题
      return; 
    }
    submit(id,index);
  }
  changeItem(flag){
    let {index,allDate,changeItem} = this.props; //当前题目下标
    index = flag ? index+1 : index-1;
    if(index < 0){
      return;
    }
    if(index === allDate.length){
      return;
    }
    changeItem(index);
  } 
  componentDidMount(){
     this.props.getdata('/api/exam');
  }
}


export default connect(
    state=>{
        console.log(state); //{index:0,alldate:[],curdata:{}}
        return state.exam;
    },
    dispatch=>bindActionCreators(examAction,dispatch)
)(ExamCont); 