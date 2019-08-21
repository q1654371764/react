import Context from './context';
import React from 'react';
const connect = (mapStateToProps)=>{
    return Com => class extends React.Component{
        render(){
            return <Context.Consumer>
                {
                    value => {
                        let data = mapStateToProps(value)
                        return <Com {...data} />
                    }
                }
            </Context.Consumer>
        }
    }
}

export default connect;