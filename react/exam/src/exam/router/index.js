import React, { Component } from 'react'
import { BrowserRouter as Router,Route } from 'react-router-dom';
import Home from '../views/home'
import ExamCont from '../views/exam'

class Index extends Component {
  render() {
    return (
      <Router>
          <Route path="/" exact component={Home} />
          <Route path="/exam" exact component={ExamCont} />
      </Router>
    )
  }
}

export default Index;