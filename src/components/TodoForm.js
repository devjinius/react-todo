import React, { Component } from 'react';
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
  border: solid 1px #4a69bd;
  border-radius: 15px;
  transition: width 1s, border-radius 1s;

  &:focus {
    width: 10rem;
    border-radius: 3px;
  }
`;

const Label = styled.label`
  line-height: 1.6;
`;

class TodoForm extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Form>
        <Label htmlFor="todo">할 일 : </Label>
        <InputWrapper>
          <Input name="todo" id="todo" />
          <Button>등록</Button>
        </InputWrapper>
      </Form>
    );
  }
}

export default TodoForm;
