import React, { Component } from 'react'
import SwiperDom from '../component/swiperdom'
import {NavLink} from 'react-router-dom'
const navdata = [
    {
        title:'顺序联系',
        path:'/exam'
    },
    {
        title:'模拟考试',
        path:'/exam'
    }
]
class Home extends Component {
    state = {
        data:[]
    }
  render() {
      let {data} = this.state;
    return (
      <div>
         <SwiperDom swiperOptions={{
             loop:true,
             autoplay:true
         }} swiperData={data}>
         </SwiperDom>
         <div>
             {
                 navdata.map((item,key)=><NavLink to={item.path} key={key}>{item.title}</NavLink>)
             }
         </div>
      </div>
    )
  }
  componentDidMount(){
      setTimeout(()=>{
        this.setState({data:[{
            title:'第一张'
         },{
            title:'第二张'
         }]})
      },800)
  }
}
export default Home;