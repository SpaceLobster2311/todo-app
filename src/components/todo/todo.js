import React, { useContext, useEffect, useState } from 'react';
import useForm from '../../hooks/form.js';
import Form from '../form.js';
import List from '../List.js';
import { ItemContext } from '../../context/Items.js'
import Header from '../Header.js';
import { v4 as uuid } from 'uuid';

const ToDo = () => {

  const [list, setList] = useState([]);
  const [incomplete, setIncomplete] = useState(0);
  const { handleChange, handleSubmit } = useForm(addItem);

  const itemEX = useContext(ItemContext);

  function addItem(item) {
    console.log(item);
    item.id = uuid();
    item.complete = false;
    setList([...list, item]);
  }

  function deleteItem(id) {
    const items = list.filter( item => item.id !== id );
    setList(items);
  }

  function toggleComplete(id) {

    const items = list.map( item => {
      if ( item.id == id ) {
        item.complete = ! item.complete;
      }
      return item;
    });

    setList(items);

  }

  useEffect(() => {
    let incompleteCount = list.filter(item => !item.complete).length;
    setIncomplete(incompleteCount);
    document.title = `To Do List: ${incomplete}`;
  }, [list]);

  
  // function Pagination(start){
  //   // Items.itemNumber === size of our slice
  //     // const [startIndex, setStartIndex] = useState(0);
  //   let result = list.slice(start, Items.itemNumber)
  //   //wont work is running in return statement
  //   setStartIndex(startIndex + Items.itemNumber) // move to a button click
  //   return result
  //   //add a button onto the list.js an onclick that sets the index to Items+Items.itemNumber
  // }


  return (
    <>

        <Header data={incomplete}/>
        <Form handleSubmit={handleSubmit} handleChange={handleChange}/>
        <List toggleComplete={toggleComplete} list={list}/>



    </>
  );
};

export default ToDo;