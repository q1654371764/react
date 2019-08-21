import React, { Component } from 'react'

export default class Dl extends Component {

    render() {
        let {img,title,price} = this.props;
        return (
            <dl>
                <dt><img src={img} /></dt>
                <dd>
                    <p>{title}</p>
                    <b>￥{price}</b>
                </dd>
            </dl>
        )
    }
}
