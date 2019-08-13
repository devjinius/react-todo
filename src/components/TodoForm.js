import React, { useState, useContext } from 'react';
import styled from 'styled-components';
import { makeId } from 'simple-util-js'; // 직접만든 util입니다.

import { GlobalContext } from './App';
import Button from './BasicButton';

const Form = styled.form`
  display: flex;
  width: 100%;
  box-sizing: border-box;

  & :focus {
    outline: none;
  }
`;

const InputWrapper = styled.div`
  display: flex;
  margin-left: 0.4rem;
  align-items: center;
`;

const Input = styled.input`
  width: 3rem;
  height: 1.5rem;
  border: none;
  border-bottom: double 3px #4a69bd;
  transition: width 0.4s ease-in-out;

  &:focus {
    width: 14rem;
    outline: none;
  }
`;

const Label = styled.label`
  line-height: 1.6;
`;

const TodoForm = () => {
  const [newTodo, setNewTodo] = useState('');
  const { todos, setTodos } = useContext(GlobalContext);

  const changeNewTodo = ({ target: { value } }) => {
    setNewTodo(value);
  };

  const addTodo = e => {
    if (!newTodo) {
      e.preventDefault();
      return;
    }

    setTodos([
      ...todos,
      {
        id: makeId(),
        title: newTodo,
        status: 'todo'
      }
    ]);

    setNewTodo('');
    e.preventDefault();
  };

  return (
    <Form>
      <Label htmlFor="todo">할 일</Label>
      <InputWrapper>
        <Input name="todo" id="todo" onChange={e => changeNewTodo(e)} value={newTodo} />
        <Button onClick={e => addTodo(e)}>등록</Button>
      </InputWrapper>
    </Form>
  );
};

export default TodoForm;
