import React from 'react';
import { Button, FormGroup, Elevation } from '@blueprintjs/core'
import '../CSS/card.css'
const Form = (props) =>{
  return(
  <form className="form" onSubmit={props.handleSubmit}>

  <h2>Add To Do Item</h2>

  <label>
    <span>To Do Item</span>
    <input onChange={props.handleChange} name="text" type="text" placeholder="Item Details" />
  </label>

  <label>
    <span>Assigned To</span>
    <input onChange={props.handleChange} name="assignee" type="text" placeholder="Assignee Name" />
  </label>

  <label>
    <span>Difficulty</span>
    <input onChange={props.handleChange} defaultValue={3} type="range" min={1} max={5} name="difficulty" />
  </label>

  <label>
    <Button  className='button' type="submit">Add Item</Button>
  </label>
</form>
  )
}
export default Form;
