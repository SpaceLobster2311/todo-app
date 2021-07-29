import React from 'react';
import ReactDOM from 'react-dom';
import Todo from './components/todo/todo.js'
import App from './app.js';
import ItemProvider from '../src/context/Items.js';
import ThemeProvider from '../src/context/theme.js';

class Main extends React.Component {
  render() {
    return(
    <ItemProvider>
      <ThemeProvider>
      <Todo />
      </ThemeProvider>
    </ItemProvider>
    )}
}

const rootElement = document.getElementById('root');
ReactDOM.render(<Main />, rootElement);