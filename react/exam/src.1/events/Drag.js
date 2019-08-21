import React, { Component } from 'react'

class Drag extends Component {
    constructor(props){
        super(props)
        this.state = {
            left:0,
            top:0
        }
    }
    render() {
        let {left,top} = this.state;
        return <div className="move" style={{
            width:100,
            height:100,
            background:'skyblue',
            position:'absolute',
            left,
            top
        }} onMouseDown={(e)=>{
            this.mousedown(e)
        }}></div>
    }
    componentDidMount(){
        document.addEventListener('mouseup',this.mouseup);
    }
    mousedown=(e)=>{
        this.x = e.clientX - e.target.offsetLeft;
        this.y = e.clientY - e.target.offsetTop;
        document.addEventListener('mousemove',this.mousemove)
    }
    mousemove=(e)=>{
        let left = e.clientX - this.x;
        let top = e.clientY - this.y;
        this.setState({left,top});
    }
    mouseup = ()=>{
        document.removeEventListener('mousemove',this.mousemove);
    }
    componentWillUnmount(){
        this.mouseup();
        document.removeEventListener('mouseup',this.mouseup);
    }
}

export default Drag;
