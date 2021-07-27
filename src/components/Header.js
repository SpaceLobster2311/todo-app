import React, { useContext } from 'react';
import Todo from './todo/todo.js'
import { ItemContext } from '../context/Items.js';
const Header = (props) =>{
  return(
    <header>

<h1>To Do List: {props.data} items pending</h1>

  </header>
  )
}

export default Header;