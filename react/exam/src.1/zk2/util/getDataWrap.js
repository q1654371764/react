import axios from 'axios';
import React from 'react';
import '../mock/'

const getDataWrap = ({type,url,params={}})=>{
    return (Com)=>class extends React.Component{
        state = {
            data:null
        }
        render(){
            // console.log(this.props);
            let {data} = this.state;
            return data ? <Com data={data} {...this.props}/> : <div>loading...</div>
        }
        componentDidMount(){
            axios[type](url,{
                params
            }).then(res=>{
                this.setState({data:res.data})
            })
        }
    }
}

export default getDataWrap;