import React, { Component } from 'react'
import data from './mock/index'
import Item from './components/Item'
import './css/style.css'
import Dialog from './components/Dialog'
class Index extends Component {
    state = {
        data,
        dialogOpen:false,
        typeDialog:null,
        typeItem:null,
        itemTitle:null
    }
    render() {
        let {data,dialogOpen,typeDialog,typeItem,itemTitle} = this.state;
        return <div>
            {
                data.map(val=><Item 
                    key={val.id} 
                    title={val.name} 
                    id={val.id}
                    ck={this.openDialog} />)
            }
            {dialogOpen && <Dialog typeDialog={typeDialog} typeItem={typeItem} itemTitle={itemTitle} dialogClose={()=>{
                this.setState({dialogOpen:false})
            }} dialogSet={({text,id,typeDialog})=>{
                let {data} = this.state; //data是局部变量
                let i = data.findIndex(val=>val.id===id);
                if(typeDialog===0){ //编辑
                    data[i].name = text;
                }else{ //删除
                    data.splice(i,1);
                }
                this.setState({data,dialogOpen:false});
            }} />}
        </div>
    }
    openDialog=(typeDialog,typeItem,itemTitle)=>{
        //显示弹窗
        this.setState({dialogOpen:true,typeDialog,typeItem,itemTitle});
    }
}

export default Index;