import React, { useState } from 'react'
import LtqFormStudent from './LtqFormStudent'   

export default function LtqListStudent() {
  // mock data
  const studentsInit = [
    { id: 1, name: "Nguyễn Văn A", age: 20 },
    { id: 2, name: "Nguyễn Thị B", age: 21 },
    { id: 3, name: "Lê Văn C", age: 22 },
    { id: 4, name: "Phạm Thị D", age: 19 },
    { id: 5, name: "Hoàng Văn E", age: 18 }
  ]

  // State
  const [students, setStudents] = useState(studentsInit)

  // thêm sinh viên mới
  const handleSubmit = (param) => {
    console.log("param:", param)
    setStudents([...students, param])  // thêm vào danh sách
  }

  return (
    <div>
      <h2>DANH SÁCH SINH VIÊN</h2>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Age</th>
          </tr>
        </thead>
        <tbody>
          {students.map((stud, index) => {
            return (
              <tr key={index}>
                <td>{stud.id}</td>
                <td>{stud.name}</td>
                <td>{stud.age}</td>
              </tr>
            )
          })}
        </tbody>
      </table>

      
      <LtqFormStudent onSubmit={handleSubmit} />
    </div>
  )
}
