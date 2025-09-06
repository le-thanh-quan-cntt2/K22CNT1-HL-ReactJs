import React from 'react'

export default function LtqFuncComp(props) {
  return (
    <div>
      <h2>Demo Functin Component</h2>
      <div><h3>Nội sung đọc từ props</h3>
      <p> Welcome to.{props.fullName}</p>
      <p>Địa chỉ:{props.address}</p>

      </div>
    </div>
  )
}
