import React, { Component } from 'react'

export default class LtqEventCompoClass extends Component {
    ltq_Func1 = ()=>{
        alert(" Hàm không có tham số")
    }
    ltq_Func2 =(pram)=>{
        alert("Hàm có tham số:\n"+pram)
    } 
    render() {
        return (
      <div>
        <h2>Event in class component</h2>
        <button onClick={this.ltq_Func1}>Click</button>
        <button onClick={this.ltq_Func2("Quan Lê Thanh")}>Click</button>
      </div>
    )
  }
}
