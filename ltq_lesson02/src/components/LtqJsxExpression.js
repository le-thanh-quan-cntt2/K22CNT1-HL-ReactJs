import React from 'react'

export default function LtqJsxExpression() {
    // Biến
    const name="FitNTU - K22"
    // Biến đối tượng
    const user = {
        firstName: "Lê Thanh",
        lastName: "Quan"
    }
    // Hàm
    const formatName=(param)=>{
        return "<h2> Welcome to, " + param.firstName+ " " + param.lastName + "</h2>";
    }

    // elemenrt
    const elemenrt =<h2 className='text-center'> Welcome to,{user.firstName} {user.lastName}</h2>
    // func-element
    const formatFullName =(param)=>{
        return <h2> Welcome to,{user.firstName} {user.lastName}</h2>
    }
    return (
    <div>
        <h2>Biểu thức Jsx</h2>
        <hr/>
        {/*Sử dụng biến*/}
        <p>Giá trị biến name:{name}</p>
        <div>
        Họ và tên: {user.firstName}{user.lastName}
        </div>
        <p>{formatName(user)}</p>
        {elemenrt}

        {formatFullName(user)}
    </div>
    )
}
