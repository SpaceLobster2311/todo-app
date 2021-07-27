import React from 'react';
import ReactDOM from 'react-dom';
import Todo from './components/todo/todo.js'
import App from './app.js';

class Main extends React.Component {
  render() {
    return <Todo />;
  }
}

const rootElement = document.getElementById('root');
ReactDOM.render(<Main />, rootElement);