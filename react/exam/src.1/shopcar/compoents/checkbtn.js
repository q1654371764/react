import React, { Component } from 'react'
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as shopcarAction from '../../store/shopcar/shopcar.action'

class Checkbtn extends Component {
    render() {
        let {checked,itemindex,groupindex,clickbtn} = this.props;
        return <span 
            className={`checkbtn ${checked ? 'active' : ''}`}
            onClick={
                ()=>{
                    clickbtn({
                        itemindex,
                        groupindex,
                        checked:!checked
                    })
                }
            }
        ></span>
    }
}


export default connect(
    state=>({}),
    dispatch=>bindActionCreators(shopcarAction,dispatch)
)(Checkbtn);