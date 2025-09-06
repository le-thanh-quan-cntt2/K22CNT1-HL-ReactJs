import React, { Component } from 'react'
import LtqFuncComp from './componets/LtqFuncComp'
import LtqClassComp from './componets/LtqClassComp'
import LtqRenderList from './LtqRenderList'
import LtqListStudent from './componets/LtqListStudent';

export default class ltqApp extends Component {
  constructor(props){
        super(props);
        this.state={
      students: [
        { id: 1, name: "Nguyễn Văn A", age: 20, gender: "Nam", isActive: true },
        { id: 2, name: "Trần Thị B", age: 21, gender: "Nữ", isActive: false },
        { id: 3, name: "Lê Văn C", age: 19, gender: "Nam", isActive: true },
        { id: 4, name: "Phạm Thị D", age: 22, gender: "Nữ", isActive: true },
        { id: 5, name: "Hoàng Văn E", age: 20, gender: "Nam", isActive: false },
      ],
    }
  }

    render() {
    return (
        <div className='container border'>
            <h1>Lê Thanh Quan</h1>
        <h2>Ôn tập component / props / state / Render ListKey</h2>
        <LtqFuncComp/>
        <hr/>
        <LtqFuncComp fullName="Thanh Quan" address="FitNTU" email="quanlekrn01@gmail.com"/>
        
        <LtqClassComp/>
        <LtqClassComp name="Quan Quan"age="21" phone="035695529" email="quanlekrn01@gmail.com"/>
        <hr/>
        <LtqRenderList></LtqRenderList>
        <hr/>
        <LtqListStudent students={this.state.students}></LtqListStudent>
        </div>
    )
    }
}
