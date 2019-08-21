import React, { Component } from 'react'

class Zoom extends Component {
    static defaultProps = {
        zoomboxStyle : {
            width:400,
            height:400
        },
        zoomMaskStyle:{
            width:150,
            height:150
        },
        zoomPicStyle:{
            width:450,
            height:450
        },
        zoom:3
    }
    state = {
        mask:{
            left:0,
            top:0
        },
        show:false  //控制小方块和大图片的显示隐藏
    }
    render() {
        let {images,zoomboxStyle,zoomMaskStyle,zoomPicStyle,zoom} = this.props;
        let {mask:{left,top},show} = this.state;
        return (
            <div className="zoombox" style={{...zoomboxStyle}} 
            onMouseEnter={this.mouseenter.bind(this)} 
            onMouseMove={this.mousemove.bind(this)}
            onMouseLeave={this.mouseleave.bind(this)}
            ref="zoombox">
                <img src={images} />
                {/* 放移动的小方块 */}
                <div className="zoommask" style={{
                    ...zoomMaskStyle,
                    left,
                    top,
                    display:show?'block':'none'
                }}></div>
                {/* 放大图片 */}
                <div className="zoompic" style={{
                    ...zoomPicStyle,
                    left:zoomboxStyle.width+5,
                    display:show?'block':'none',
                    backgroundImage:`url(${images})`,
                    backgroundSize:`${zoomboxStyle.width*zoom}px ${zoomboxStyle.height*zoom}px`,
                    backgroundPosition:`${-left*zoom}px ${-top*zoom}px`
                }}></div>
            </div>
        )
    }
    mouseenter(){
        //滑入
        this.setState({show:true})
    }
    mouseleave(){
        //滑出
        this.setState({show:false})
    }
    mousemove(e){
        //移动
        let {zoomMaskStyle:{width,height},zoomboxStyle} = this.props;
        let {offsetLeft,offsetTop} = this.refs.zoombox;
        let maxLeft = zoomboxStyle.width - width;
        let maxTop = zoomboxStyle.height - height;
        let curLeft = e.clientX - offsetLeft - width / 2;
        let curTop = e.clientY - offsetTop - height / 2;
        if(curLeft <= 0){
            curLeft = 0;
        }
        if(curLeft >= maxLeft){
            curLeft = maxLeft;
        }
        if(curTop <= 0){
            curTop = 0;
        }
        if(curTop >= maxTop){
            curTop = maxTop;
        }
        this.setState({
            mask:{
                left:curLeft,
                top:curTop
            }
        })
    }
}

export default Zoom;