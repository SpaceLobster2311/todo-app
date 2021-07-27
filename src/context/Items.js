import React, {useState} from 'react';

export const ItemContext = React.createContext();

function ItemProvider(props){

  const [complete, setComplete] = useState('incomplete');
  const [itemNumber, setItemNumber] = useState(0);

  return(
    <ItemContext.Provider value={{complete: complete, itemNumber: itemNumber}}>
      {props.children}
    </ItemContext.Provider>
  )
}
export default ItemProvider;