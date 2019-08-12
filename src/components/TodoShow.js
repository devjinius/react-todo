import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import useFetch from '../hooks/useFetch';
import TodoList from './TodoList';
import Button from './BasicButton';

const Header = styled.div`
  width: 100%;
  padding: 1rem 0px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Ul = styled.ul`
  padding-left: 2rem;
`;

const clickHandler = e => {
  console.log('접었다!');
};

const TodoShow = () => {
  const [todos, setTodos] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    useFetch({
      fn: setTodos,
      errorFn: setError,
      url: 'https://h3rb9c0ugl.execute-api.ap-northeast-2.amazonaws.com/develop/todolist/'
    });
  }, []);

  return (
    <>
      <Header>
        <h3>해야할 일들</h3>
        <Button onClick={clickHandler}>접기</Button>
      </Header>

      <TodoList todos={todos} error={error} />
    </>
  );
};

export default TodoShow;
