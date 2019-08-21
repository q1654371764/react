import React, { Component } from 'react'
import Item from '../components/item'
class Right extends Component {
  render() {
    return (
      <div>
            <Item></Item>
      </div>
    )
  }
  componentWillReceiveProps(nextProps){
    let {match} = nextProps;
    console.log(match);
  }
  componentDidMount(){
    let {match} = this.props;
    console.log(match);
  }
}

export default Right;