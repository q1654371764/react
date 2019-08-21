import React, { Component } from 'react'
import Swiper from 'swiper';
import 'swiper/dist/css/swiper.min.css'
class Swiperdom extends Component {
  render() {
      let {swiperData} = this.props;
    return (
      <div className="swiper-container" ref="container">
            <div className="swiper-wrapper">
                {
                  swiperData.map((item,key)=><div key={key} className="swiper-slide">{item.title}</div>)  
                }
            </div>
      </div>
    )
  }
  componentDidMount(){
      let {swiperOptions} = this.props;
      this.mySwiper = new Swiper(this.refs.container,{
            ...swiperOptions
      })
  }
  componentDidUpdate(){
      this.mySwiper.update();
  }
}

export default Swiperdom;