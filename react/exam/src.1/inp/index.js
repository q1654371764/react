import React from 'react';
import {findDOMNode,unmountComponentAtNode} from 'react-dom'
class Box extends React.Component{
    state = {
        radios:50,
        color:'red'
    }
    render(){
        return <div>
            <canvas ref={(el)=>{
                el && this.draw(el);
            }} width="500" height="500"></canvas>
            {/* <video src="http://10.1.1.65:8000/domw.wmv" width="500" height="500" ref={(video)=>{
                video && (video.autoplay = true);
            }}>111</video> */}
            <button onClick={()=>{
                this.setState({radios:Math.random()*360})
            }}>随机圆</button>
        </div>
    }
    componentDidMount(){
        // this.draw();
    }
    draw(canvas){
        let {radios,color} = this.state;
        this.ctx = canvas.getContext('2d');
        this.ctx.clearRect(0,0,500,500);
        this.deg = Math.PI/180;
        this.ctx.beginPath();
        this.ctx.moveTo(250,250);
        this.ctx.arc(250,250,100,0,this.deg*radios);
        this.ctx.fillStyle = color;
        this.ctx.fill();
    }
}
class Inp extends React.Component{
    state = {
        text:''
    }
    render(){
        let {text} = this.state;
        return <div>
            <input type="text" value={text} ref={"a"} onChange={()=>{
                this.setState({text:this.refs.a.value})
            }} />
            <Box ref="box" />
            <button onClick={()=>{
                unmountComponentAtNode(document.getElementById('root'));
            }}>删除</button>
        </div>
    }
    componentDidMount(){
        console.log(this.refs.box);
        console.log(findDOMNode(this.refs.box))
    }
}

export default Inp;