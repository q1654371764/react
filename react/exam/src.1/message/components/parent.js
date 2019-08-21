import React, { Component } from 'react'
import Son from './son'
import B from './b'
class Parent extends Component{
    render(){
        return <div className="Parent">Parent
            <Son/>
            <B />
        </div>
    }
}

export default Parent;