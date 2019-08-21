import React, { Component } from 'react'
import Index from './exam/router'
import {Provider} from 'react-redux';
import store from './store/index'
class App extends Component {
  render() {
    return (
      <div>
          <Provider store={store}>
            <Index />
          </Provider>
      </div>
    )
  }
}


export default App;