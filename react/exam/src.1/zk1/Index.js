import React, { Component } from 'react'
import ShopType from './component/shopType'
import RightList from './component/RightList'
import axios from 'axios';
import './mock/index'
class Index extends Component {
    state = {
        rightnav:[],
        leftcont:[]
    }
    render() {
        let {rightnav,leftcont} = this.state;
        return <div>
            <RightList rightnav={rightnav} clickNav={(id)=>{
                this.getLeftCont(id);
            }}/>
            <ShopType leftcont={leftcont}/>
        </div>
    }
    componentDidMount(){
        this.getdata();
    }
    async getdata(){
        let res = await axios.get('/api/rightnav');
        let {rightnav} = res.data;
        this.setState({rightnav});
        this.getLeftCont(rightnav[0].id)
    }
    getLeftCont(typeid){
        axios.post('/api/leftcont',{
            typeid
        }).then(res=>{
            this.setState({leftcont:res.data});
        })
    }
}

export default Index;
