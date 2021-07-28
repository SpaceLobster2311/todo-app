import React, {useContext, useState} from 'react';
import { Button, Card, Elevation } from '@blueprintjs/core';
import Items from '../context/Items.js'
import { ItemContext } from '../context/Items.js';
import '../CSS/card.css';
const List = (props) => {
  const itemEX = useContext(ItemContext);
  const [startIndex, setStartIndex] = useState(0);
  const [endIndex, setEndIndex] = useState(itemEX.itemNumber);




  function pagination() {
    // settings.itemNumber === size of our slice


    let result = props.list.slice(startIndex, endIndex);



    return result;
  }

  function next() {
    setStartIndex(startIndex + itemEX.itemNumber);
    setEndIndex(endIndex + itemEX.itemNumber);
  }



  return(
    <>
    {pagination().map(item => (
      <Card className='list' interactive={true} elevation={Elevation.TWO} key={item.id}>
        <h3>{item.text}</h3>
        <p><large>Name: {item.assignee}</large></p>
        <p><medium>Difficulty: {item.difficulty}</medium></p>
        {(!item.complete)
        ?<Button onClick={() => props.toggleComplete(item.id)}>Complete: {item.complete.toString()}</Button>
        :<Button onClick={() => props.deleteItem(item.id)}> Delete: </Button>
        }
        <hr />
      </Card>
    ))}
    </>
  )
}
export default List;