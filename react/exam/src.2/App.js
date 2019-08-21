import React, { Component } from 'react'
import Index from './table';
import {Provider} from 'react-redux'
import store from './store'
class App extends Component {
  render() {
    return (
      <div className="app">
        <Provider store={store}>
            <Index />
        </Provider>
      </div>
    )
  }
}

export default App;