import React, { Component } from 'react'
import Context from '../util/context'

class Letter extends Component{
    render(){
        return <div>
            <Context.Consumer>
                {
                    value=>{
                        return <p>{value.title}</p>
                    }
                }
            </Context.Consumer>
        </div>
    }
}
class Son extends Component{
    render(){
        return <div className="son">son
            <Letter />
            <Context.Consumer>
                {
                    value=>{
                        return <p>{value.title}</p>
                    }
                }
            </Context.Consumer>
        </div>
    }
}

export default Son;