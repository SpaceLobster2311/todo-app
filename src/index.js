import React from 'react';
import ReactDOM from 'react-dom';
import Todo from './components/todo/todo.js'
import App from './app.js';
import ItemProvider from '../src/context/Items'


class Main extends React.Component {
  render() {
    return(
    <ItemProvider>
      <Todo />;
    </ItemProvider>
    )}
}

const rootElement = document.getElementById('root');
ReactDOM.render(<Main />, rootElement);