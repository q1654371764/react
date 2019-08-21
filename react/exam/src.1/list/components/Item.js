import React, { Component } from 'react'
import {connect} from 'react-redux';
class Item extends Component {
    render() {
        let {lists,addcomit} = this.props;
        return (
        <div>
            {
                lists.map((item,key)=><div key={key} onClick={()=>{
                    addcomit({
                        key
                    })
                }}>{item.value}</div>)
            }
        </div>
        )
    }
}
//仓库状态传递给props
let mapStateToProps = state=>{  //仓库状态更新时触发
    return {lists:state.lists} //props
}
let mapDispatchToProps = (dispatch)=>{  //调用dispatch
    return { //props
        addcomit(obj){
            dispatch({
                type:'DEL_COMMIT',
                key:obj.key
            })
        }
    }
}

Item = connect(mapStateToProps,mapDispatchToProps)(Item);

export default Item;