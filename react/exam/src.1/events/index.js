import React, { Component } from 'react'

class Index extends Component {
  render() {
    return <div className="index">
         <div style={{
             width:500,
             height:500,
             background:'red'
         }} onClickCapture={this.one.bind(this)} ref={el=>this.one=el}>
            <div style={{
                width:300,
                height:300,
                background:'blue'
            }} onClickCapture={this.two.bind(this)}  ref={el=>this.two=el}>
                <div style={{
                    width:100,
                    height:100,
                    background:'pink'
                }} onClickCapture={this.three.bind(this)} ref={el=>this.three=el}></div>
            </div>
         </div>
      </div>
    
  }
  componentDidMount(){
    this.one.addEventListener('click',(e)=>{
        // e.stopPropagation();
        console.log('js---红色')
    },true)
    this.two.addEventListener('click',()=>{
        console.log('js--蓝色')
    },false)
    this.three.addEventListener('click',(e)=>{
        
        console.log('js--粉色')
    },true)
  }
  one(){
    console.log('红色')
  }
  two(){
    console.log('蓝色')
  }
  three(){
    console.log('粉色')
  }
}


export default Index;