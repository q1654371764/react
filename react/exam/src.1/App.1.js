import React,{Component} from 'react';
class Son extends Component{
   render(){
     let {title,ck} = this.props;
    //  console.log(ck);
     return <div onClick={()=>{
       ck('点击son组件')
     }}>{title}</div>
   }
}
class App extends Component{
  constructor(props){
    super(props);
    //this实例
    this.state = {
      url:'www',
      stateTitle:this.props.title
    }
  }
  render(){ //渲染react元素
    let {title} = this.props;
    let {url,stateTitle} = this.state;
    return <div className="app">
        <h2>{title}</h2>
        <h2 onClick={this.changeURl.bind(this,'aaa')}>{url}</h2>
        <h2>{stateTitle}</h2>
        <Son title={stateTitle} ck={(stateTitle)=>{
           this.setState({stateTitle})
        }}/>
    </div>
  }
  changeURl(str){
    this.setState({url:str})
  }
}



export default App;