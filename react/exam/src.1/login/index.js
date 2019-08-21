import React, { Component } from 'react'
import axios from 'axios';
import './mock'
class Index extends Component {
    state = {
        username:'',
        pwd:'',
        showPwd:false,
        disabled:false
    }
    render() {
        let {username,pwd,showPwd,disabled} = this.state;
        return <div>
            <form>
                <input type="text" value={username} onChange={(e)=>{
                    this.setState({username:e.target.value})
                }} /> <br />
                <input 
                type={showPwd?'text':'password'} 
                value={pwd} 
                onChange={(e)=>{
                    this.setState({pwd:e.target.value})
                }} />
                <button type="button" 
                    onMouseDown={()=>{
                        this.setState({showPwd:true})
                    }} 
                    onMouseUp={()=>{
                        this.setState({showPwd:false})
                    }}>眼睛</button> 
                <br />
                <button 
                type="button" 
                onClick={this.login.bind(this)}
                disabled={disabled}
                >登陆</button>
            </form>
        </div>
    }
    login(){
        let {username,pwd} = this.state;
        this.setState({disabled:true})
        if(username.trim() && pwd.trim()){
            axios.post('/api/login',{
                username,pwd
            }).then(res=>{
                this.setState({disabled:false})
                console.log(res);
            })
        }else{
            alert('不能为空')
        }
    }
}


export default Index;