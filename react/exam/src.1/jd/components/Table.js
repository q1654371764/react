import React, { Component } from 'react'
import Dl from './Dl';
import '../css/tablebox.css'
export default class Table extends Component {
    state = {
        index:0
    }
    render() {
        let {Tabledata} = this.props;
        let {index} = this.state;
        return (
        <div className="tablebox">
            <div className="tabletit">
                    {
                        Tabledata.map((item,key)=><span className={
                            key===index ? 'active' : ''
                        } 
                        key={key}
                        onMouseOver={this.changecont.bind(this,key)}>{item.title}</span>)
                    } 
            </div>
            <div className="tablecont">
                    {
                        Tabledata[index].content.map((item,key)=><Dl img={item.img} price={item.price} title={item.tit} key={key}/>)
                    }
            </div>
        </div>
        )
    }
    changecont(index){
        this.setState({index});
    }
}
