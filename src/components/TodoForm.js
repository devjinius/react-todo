import React, { Component } from 'react';
import styled from 'styled-components';

import Button from './BasicButton';

const Form = styled.form`
  display: flex;
  width: 20rem;

  & :focus {
    outline: none;
  }
`;

const InputWrapper = styled.div`
  display: flex
  widht: 15rem
  margin-left: 0.4rem;
`;

const Input = styled.input`
  width: 3rem;
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
