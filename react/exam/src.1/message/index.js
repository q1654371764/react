import React, { Component } from 'react'
import Context from './util/context';
import Parent from './components/parent'
import A from './components/a'
class Index extends Component {
    state = {
        title:'1611B'
    }
  render() {
    return (
      <div className="wrap">
        <Context.Provider value={{title:this.state.title}}>
            <Parent></Parent>
        </Context.Provider>

        
        <A />
      </div>
    )
  }
}



export default Index;