import React, { Component } from 'react';
import styled from 'styled-components';

import Todo from './Todo';

const Ul = styled.ul`
  padding-left: 2rem;
`;

class TodoList extends Component {
  constructor(props) {
    super(props);
  }

  getTodoComponents(todos) {
    return todos.map(todo => <Todo key={todo.id} {...todo} />);
  }
  render() {
    const { todos } = this.props;
    const todoComponents = this.getTodoComponents(todos);
    return <Ul>{todoComponents}</Ul>;
  }
}

export default TodoList;
