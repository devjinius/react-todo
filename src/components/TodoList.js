import React, { useContext } from 'react';
import styled from 'styled-components';

import Todo from './Todo';
import { GlobalContext } from './App';

const Ul = styled.ul`
  padding-left: 2rem;
`;

const TodoList = () => {
  const { todos, setTodos, loading, error } = useContext(GlobalContext);

  const removeHandler = id => {
    const newTodos = todos.filter(todo => todo.id !== id);
    setTodos(newTodos);
  };

  const toggleStatus = id => {
    const newTodos = todos.map(todo => {
      if (todo.id === id) todo.status = todo.status === 'todo' ? 'done' : 'todo';
      return todo;
    });

    setTodos(newTodos);
  };

  const getTodoComponents = todos =>
    todos.map(todo => (
      <Todo
        key={todo.id}
        {...todo}
        onRemoveClick={() => removeHandler(todo.id)}
        toggleStatus={() => toggleStatus(todo.id)}
      />
    ));

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
