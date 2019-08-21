import React, { Component } from 'react'
import Table from './components/Table'
import Zoom from './components/Zoom'
import './css/index.css';
const data = [
    {
        min:require('./images/min1.png'),
        big:require('./images/big1.png')
    },
    {
        min:require('./images/min2.png'),
        big:require('./images/big2.png')
    },
    {
        min:require('./images/min3.png'),
        big:require('./images/big3.png')
    },
    {
        min:require('./images/min4.png'),
        big:require('./images/big4.png')
    }
]
class Index extends Component {
    state = {
        data,
        index:0
    }
  render() {
      let {data,index} = this.state;
    return (
      <div>
        <Zoom images={data[index].big} />
        <Table data={data} changeBigImage={this.changeBigImage} index={index}/>
      </div>
    )
  }
  changeBigImage=(index)=>{
    this.setState({index});
  }
}


export default Index