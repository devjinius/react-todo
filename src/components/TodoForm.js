import React from 'react';
import styled from 'styled-components';

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
  return (
    <Form>
      <Label htmlFor="todo">할 일</Label>
      <InputWrapper>
        <Input name="todo" id="todo" />
        <Button onClick={e => e.preventDefault()}>등록</Button>
      </InputWrapper>
    </Form>
  );
};

export default TodoForm;
