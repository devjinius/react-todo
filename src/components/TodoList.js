import React from 'react';
import styled from 'styled-components';

import Todo from './Todo';

const Ul = styled.ul`
  padding-left: 2rem;
`;

const getTodoComponents = todos => todos.map(todo => <Todo key={todo.id} {...todo} />);

const TodoList = ({ todos, error, loading }) => {
  if (loading) {
    return '로딩중입니다만...';
  }

  if (!!error) {
    return '=( 에러가 발생했습니다.';
  }

  const todoComponents = getTodoComponents(todos);

  return <Ul>{todoComponents}</Ul>;
};

export default TodoList;
