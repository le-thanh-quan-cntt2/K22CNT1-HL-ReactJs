import React, { useState } from 'react'

export default function LtqFormStudent({ onSubmit }) {
  // state
  const [id, setId] = useState(0)
  const [name, setName] = useState("Thanh Quan")
  const [age, setAge] = useState(0)

  // handleSubmit
  const handleSubmit = (event) => {
    event.preventDefault()
    let obj = {
      id: id,
      name: name,
      age: age
    }
    if (onSubmit) {
      onSubmit(obj) 
    } else {
      console.log("Dữ liệu form:", obj)
    }
  }

  return (
    <div>
      <h3>Thêm thông tin</h3>
      <p>
        ID:
        <input
          name="id"
          value={id}
          onChange={(ev) => setId(ev.target.value)}
        />
      </p>
      <p>
        Name:
        <input
          name="name"
          value={name}
          onChange={(ev) => setName(ev.target.value)}
        />
      </p>
      <p>
        Age:
        <input
          name="age"
          value={age}
          onChange={(ev) => setAge(ev.target.value)}
        />
      </p>
      <button onClick={handleSubmit}>Ghi lại</button>
    </div>
  )
}
