import React, { Component } from 'react'
class Son extends Component{
    state = {
        sontop:0,
        sonleft:0
    }
    render(){
        console.log(3);
        let {title} = this.props;
        let {sontop,sonleft} = this.state;
        return <div className="son">
            son: <b>{title}</b>
            <div style={{
                width:100,
                height:100,
                background:'red',
                position:'absolute',
                top:sontop,
                left:sonleft
            }}
            onMouseDown={(e)=>{

            }}></div>
        </div>
    }
    componentDidMount(){
        document.onmousemove = function(){

        }
        this.timer = setTimeout(function(){

        },1000)
    }
    componentWillReceiveProps(nextProps){
        console.log(nextProps);
        console.log('组件将接受新的props');
    }
    shouldComponentUpdate(){
        console.log(1);
        return true;
    }
    componentWillUpdate(){
        console.log(2);
    }
    componentDidUpdate(){
        console.log('子-更新完成');
    }
    componentWillUnmount(){
        console.log('要卸载了')  //清理事件 清理定时器 
        document.onmousemove = null;
        clearTimeout(this.timer);
    }
}


class Index extends Component {
    constructor(props){
        super(props);
        console.log('可以获取props 设置state')
        this.state = {
            title:"1611B",
            name:'网站',
            open:true
        }
    }
    componentWillMount(){
        console.log('组件即将被渲染');
    }
    render() {
        console.log('组件正在被渲染，在这进行diff算法比较最小化差异实现dom局部更新，每次状态发生变化都会触发render')
        return <div>
            {this.state.open ? <Son title={this.state.title} /> : null}
            <p onClick={()=>{
                this.setState({title:"react"});
            }}>{this.state.title}</p>
            <button onClick={()=>{
                this.setState({open:false});
            }}>卸载son</button>
        </div>
    }
    componentDidMount(){
        console.log('组件初始渲染完成')
    }
    shouldComponentUpdate(nextProps,nextState){
        console.log(nextProps);
        // if(nextState.title === 'react'){
        //     return true;
        // }else{
        //     return false;
        // } 
        return true;
    }
    componentWillUpdate(nextProps,nextState){
        console.log('组件将要更新')
    }
    componentDidUpdate(prevProps,prevState){
        console.log(prevProps,prevState);
        console.log('父-组件更新完成')
    }
}


export default Index;