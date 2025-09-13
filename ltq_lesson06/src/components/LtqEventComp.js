import React from 'react'

export default function LtqEventComp() {
    const ltq_Func1 = ()=>{
        alert("Xin chào")
    }
    const ltq_Func2 = (param)=>{
        alert(param)
    }
    return (
    <div>
        <h1>Event - Component Function</h1>
        <button onClick={ltq_Func1}> Click Here</button>
        {/* gọi lần đầu tiên và duy nhất khi load*/}
        <button onClick={ltq_Func1()}> Click Here</button>
        {/* gọi hàm có tham số*/}
        <button onClick={()=>ltq_Func2('Thanh Quan')}> Click Here Param</button>

    </div>
    )
}
