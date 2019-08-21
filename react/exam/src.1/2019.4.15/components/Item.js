import React, { Component } from 'react'

class Item extends Component {
    static defaultProps = {
        title:'默认标题'
    }
    state = {
        settinglistOpen:false,
        lis:[
            {
                title:'重命名',
                id:0
            },
            {
                title:'删除',
                id:1
            }
        ]
    }
    render() {
        let {title,id} = this.props;
        let {settinglistOpen,lis} = this.state;
        return <div className="item">
            <div className="setting">
                <span onClick={this.showSettinglist}><i></i></span>
                <ul className="settinglist"
                style={{
                    display:settinglistOpen ? 'block' : 'none'
                }}>
                    {
                        lis.map(val=><li key={val.id} onClick={this.openDialog.bind(this,val.id,id,title)}>{val.title}</li>)
                    }
                </ul>
            </div>
            <div className="content">
                {title}
            </div>
        </div>
    }
    showSettinglist=()=>{
        this.setState({settinglistOpen:!this.state.settinglistOpen});
    }
    openDialog(typeDialog,typeItem,itemTitle){
        let {ck} = this.props;
        ck(typeDialog,typeItem,itemTitle);
    }
}

export default Item;