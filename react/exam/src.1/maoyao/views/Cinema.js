import React, { Component } from 'react'
import Foot from '../components/Foot'
import Head from '../components/Head'
export default class Cinema extends Component {
  render() {
    console.log(this.props);
    return (
      <div>
            <Head title="影院"/>
            <main>
                影院
            </main>
            <Foot />
      </div>
    )
  }
}
