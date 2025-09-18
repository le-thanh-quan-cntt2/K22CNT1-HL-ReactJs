import React from 'react'
import LtqUseState from './components/LtqUseState'
import LtqListStudent from './components/LtqListStudent'
import LtqUseEffectDemo from './components/LtqUseEffectDemo'
import LtqExampleContext from './components/LtqExampleContext'

export default function LtqApp() {
  return (
    <div className='container border'>
        <h1>React Hook - Demo [Lê Thanh Quan]</h1>
        <hr/>

        {/* <LtqUseState />

        <LtqListStudent />

        <LtqUseEffectDemo /> */}

        <LtqExampleContext />
    </div>
  )
}