import React, { useEffect, useState } from 'react';
import useForm from '../../hooks/form.js';
import Form from '../form.js';
import List from '../List.js';
import Items from '../../context/Items.js'
import Header from '../Header.js';
import { v4 as uuid } from 'uuid';

const ToDo = () => {

  const [list, setList] = useState([]);
  const [incomplete, setIncomplete] = useState(0);
  const { handleChange, handleSubmit } = useForm(addItem);

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
    // document.title = `To Do List: ${incomplete}`;
  }, [list]);

  
  return (
    <>
      <Items>
        <Header data={incomplete}/>
      <Form handleSubmit={handleSubmit} handleChange={handleChange}/>

      <List toggleComplete={toggleComplete} list={list}/>
      </Items>


    </>
  );
};

export default ToDo;