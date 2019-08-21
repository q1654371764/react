import React, { Component } from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux';
import * as tableAction from '../store/table/table.action'

class Index extends Component {
  render() {
        let {navdata,resData,changeCont} = this.props;
        console.log(resData);
        return <div>
            <nav>
                {
                    navdata.map(item=><span 
                        key={item.id}
                        onClick={()=>{
                            changeCont(item.id)
                        }}
                    >{item.title}</span>)
                }
            </nav>
        </div>
  }
  componentDidMount(){
    let {navdata,changeCont} = this.props;
    changeCont(navdata[0].id); 
  }
}
let mapStateToProps = state=>{
    return state.table
}
// function _bindActionCreators(obj,dispatch){
//     let res = {};
//     Object.keys(obj).forEach(keys=>{
//         res[keys] = (...arg)=>{ //props
//             dispatch(obj[keys](...arg)) //自动调用dispatch
//         }
//     })
//     return res;
// }
//mapDispatchToProps 必须要有返回值 必须是对象类型
let mapDispatchToProps = dispatch=>bindActionCreators(tableAction,dispatch);
// let mapDispatchToProps = dispatch=>{
//     return {
//         changeCont(id){
//             dispatch({
//                 type:'CHANGE_CONTENT',
//                 id
//             })
//         }
//     }
// }


export default connect(mapStateToProps,mapDispatchToProps)(Index);