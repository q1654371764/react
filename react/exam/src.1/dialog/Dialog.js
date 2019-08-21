import React, { Component } from 'react'

class Dialog extends Component {
    render() {
        let {title,children} = this.props;
        // console.log(children);
        return (
            <div className="dialog">
                <h2>{title}</h2>
                <div className="dialogbody">
                    {
                        children
                    }
                </div>
                <div className="dialogBtn">
                    <button>确定</button>
                    <button>取消</button>
                </div>
            </div>
        )
    }
}
Dialog.defaultProps = {
    title:'弹窗标题'
}
export default Dialog;
