import React from 'react';
import styled from 'styled-components';

import Todo from './Todo';

const Ul = styled.ul`
  padding-left: 2rem;
`;

const getTodoComponents = todos => todos.map(todo => <Todo key={todo.id} {...todo} />);

const TodoList = ({ todos, error }) => {
  const todoComponents = !!error ? '=( 에러가 발생했습니다.' : getTodoComponents(todos);

  return <Ul>{todoComponents}</Ul>;
};

export default TodoList;
