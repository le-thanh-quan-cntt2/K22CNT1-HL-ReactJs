import React from 'react'

export default function LtqFuncomp(ltqProps) {
    return (
    <div className='alert alert-danger'>
        <h2>function component Demo</h2>
        <h3>Welcome to, {ltqProps.name} - {ltqProps.age}</h3>
    </div>
    )
}
