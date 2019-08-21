import React, { Component } from 'react'
import '../../../mock/';
import axios from 'axios';
import Item from '../../../components/Item'
export default class Hot extends Component {
    state = {
        list:[]
    }
    render() {
        let {list} = this.state;
        return (
            <div>
                {
                    list.map(item=><Item key={item.id} data={item} />)
                }
            </div>
        )
    }
    componentDidMount(){
        axios.get('/movie').then(res=>{
            this.setState({list:res.data.list})
        })
    }
}
