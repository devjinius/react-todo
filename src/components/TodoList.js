import React, { Component } from 'react';

import Todo from './Todo';

class TodoList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <div>
          <h3>해야할 일들</h3>
        </div>

        <ul>
          <Todo />
          <Todo />
          <Todo />
          <Todo />
        </ul>
      </>
    );
  }
}

export default TodoList;
