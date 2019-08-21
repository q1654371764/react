import React,{Component} from 'react';
class Son extends Component{
    constructor(props){
        super(props);
        this.state = {

        }
    }
    render(){
        console.log('render');
        let {title} = this.props;
        return <div className="son">
            <p>子组件:{title}</p>

        </div>
    }
    static getDerivedStateFromProps(){
        console.log('getDerivedStateFromProps')
        return {};
    }
    shouldComponentUpdate(){
        console.log('shouldComponentUpdate')
        return true;
    }
    getSnapshotBeforeUpdate(){
        return null;
    }
    componentDidUpdate(a,b,c){
        console.log(a,b);
        console.log(c);
    }
}

class NewLife extends Component{
    constructor(props){
        super(props);
        this.state = {
            title:'1611B'
        }
        console.log(1);
    }
    // componentWillMount(){ //废除
    //     console.log(2)
    // }
    render(){
        console.log('render')
        return <div>
            <Son title={this.state.title}/>
            <p onClick={()=>{
                this.setState({title:"react"})
            }}>父组件: <b>{this.state.title}</b></p>
        </div>
    }
    componentDidMount(){
        console.log(4);
    }
    static getDerivedStateFromProps(nextProps,nextState){  //新增
        console.log('getDerivedStateFromProps');
        console.log(nextProps,nextState);
        //返回nullstate不会重新更新 返回{} setstate
        return null;
    }
    shouldComponentUpdate(nextProps,nextState){
        console.log('shouldComponentUpdate');
        console.log(nextProps,nextState)
        return true;
    }
    getSnapshotBeforeUpdate(prevProps,prevState){
        return {aa:'网站'}
    }
    componentDidUpdate(prevProps,prevState,data){
        console.log(prevProps,prevState);
        console.log(data);
    }
}


export default NewLife;