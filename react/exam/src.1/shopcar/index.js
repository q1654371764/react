import React, { Component } from 'react'
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as shopcarAction from '../store/shopcar/shopcar.action'
import Checkbtn from './compoents/checkbtn'
import Group from './compoents/group'
import './css/style.css'
class Index extends Component {
  render() {
    let {allprice,content,allcheck} = this.props;
    console.log(content);
    return (
      <div>
        <main>
            {
               content.map((item,key)=><Group key={key} groupindex={key} data={item}/>) 
            }
        </main>
        <footer>
            <Checkbtn checked={allcheck} />全选
            <span>合计 ￥{allprice}</span>
            <button>结算</button>
        </footer>
      </div>
    )
  }
  componentDidMount(){
        let {initGetData} = this.props;
        initGetData('/api/shopcar');
  }
}
export default connect( 
    state=>{ //派发props  仓库状态更新时调用的
        // console.log(state); //{lists:[],shopcar:{}}
        return state.shopcar;
    },
    dispatch=>bindActionCreators(shopcarAction,dispatch)
)(Index);