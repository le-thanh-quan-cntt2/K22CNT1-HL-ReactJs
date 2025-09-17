import React, { Component } from 'react'
import LtqUseState from './components/LtqUseState'
import LtqListStudent from './components/LtqListStudent'
import LtqFormStudent from './components/LtqFormStudent'

export default class LtqApp extends Component {
  render() {
    return (
      <div className='container border'>
        <h1>React Hook- Demo[Lê Thanh Quan]</h1>
      <hr/>
      <LtqUseState/>
      <LtqListStudent></LtqListStudent>
      <LtqFormStudent onSubmit={this.handleStudentSubmit} />
      </div>
    )
  }
}
