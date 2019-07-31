import React, { Component } from 'react';

import Todo from './Todo';
import Button from './BasicButton';

class TodoList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <div>
          <h3>해야할 일들</h3>
          <Button height="2.5rem">접기</Button>
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
