import React, { Component } from 'react'

export default class LtqListStudent extends Component {
  render() {
    let{students}=this.props;
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
            {students.map((student, index)=>(
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
