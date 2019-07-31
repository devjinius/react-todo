import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <TodoForm />
        <TodoList />
      </>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
