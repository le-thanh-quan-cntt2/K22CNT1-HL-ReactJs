import React, { Component } from 'react'

export default class LtqEventForm1 extends Component {
    constructor(props){
        super(props);
        this.state={
            studentName:"Thanh Quan"
        }

    }
    handleChange =(e)=>{
        this.setState({
            studentName:e.targe.value
        })
    }
    handleUpdate =(e)=>{
        this.setState({
            studentName:"Quan Mới"
        })
    }
  render() {
    return (
      <div className='alert alert-danger'>
     <h2>Event Form</h2>
     <hr/>
     <form>
        <label htmlFor='studentName'>Student Name:</label>
        <input name='studentName' id='studentName'
         value={this.state.studentName}
         onChange={this.handleChange}
         />
         <button onClick={this.handleUpdate}>change value</button>
        <button>Submit</button>
     </form>
      </div>
    )
  }
}
