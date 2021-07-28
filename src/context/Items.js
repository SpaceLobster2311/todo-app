import React, {useState} from 'react';

export const ItemContext = React.createContext();

function ItemProvider(props){

  const [hide, setHide] = useState(false);
  const [itemNumber, setItemNumber] = useState(3);
  const [sort, setSort] = useState('')
  return(
    <ItemContext.Provider value={{hide, itemNumber, sort}}>
      {props.children}
    </ItemContext.Provider>
  )
}
export default ItemProvider;