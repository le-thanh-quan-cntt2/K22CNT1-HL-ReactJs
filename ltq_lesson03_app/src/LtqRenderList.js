import React, { Component } from 'react'

export default class LtqRenderList extends Component {
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
      <div>
        <h2>Danh sách sinh viên</h2>
        <hr/>
        <table className='table table-bordered'>
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Age</th>
              <th>Gender</th>
              <th>State</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {this.state.students.map((student, index)=>(
              <tr key={index}>
                <td>{student.id}</td>
                <td>{student.name}</td>
                <td>{student.age}</td>
                <td>{student.gender}</td>
                <td>{student.isActive ? 'Hoạt động' : 'Khóa'}</td>
                <td>
                  <button className="btn btn-info btn-sm">Xem</button>{' '}
                  <button className="btn btn-warning btn-sm">Sửa</button>{' '}
                  <button className="btn btn-danger btn-sm">Xóa</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    )
  }
}
