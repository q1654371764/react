import React, { Component } from 'react'
import '../css/tablebox.css';
export default class SlidePic extends Component {
    state = {
        index:0
    }
  render() {
      let {Slidedata} = this.props;
      let {index} = this.state;
        return (
            <div className="slidepic">
                {
                    Slidedata.map((item,key)=><div key={key}
                        className={index===key?'active' : ''}
                        onMouseOver={()=>{
                            this.setState({index:key})
                        }}>
                        <p className="slidetit">{item.title}</p>
                        <p className="slideinfo">{item.info}</p>
                        <p className="slidebtn">GO</p>
                        <div className="imgbox">
                            <img src={item.img} />
                        </div>
                    </div>)
                }
            </div>
        )
  }
}
