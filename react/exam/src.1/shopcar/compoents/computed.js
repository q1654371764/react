import React, { Component } from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux';
import * as shopcarAction from '../../store/shopcar/shopcar.action'

class Computed extends Component {
    render() {
        let {count} = this.props;
        return (
        <div>
            <button onClick={this.changecount.bind(this,'add')}>+</button>
            <span>{count}</span>
            <button onClick={this.changecount.bind(this,'res')}>-</button>
        </div>
        )
    }
    changecount=(flag)=>{
        //itemindex 商品下标
        //groupindex 店铺下标
        let {itemindex,groupindex,changecount,count} = this.props;
        //count = flag === 'add' ? (count+1) : (count <= 1 ? 1 : count-1);
        if(flag === 'add'){
            count = count+1;
        }else{
            if(count <= 1){
               return;
            }
            count = count-1;
        }
        changecount({
            itemindex,
            groupindex,
            count
        })
    }
}


export default connect(
    state=>({}),
    dispatch=>bindActionCreators(shopcarAction,dispatch)
)(Computed);