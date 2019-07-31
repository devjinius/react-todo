import React, { Component } from 'react';
import styled from 'styled-components';

const Form = styled.form`
  display: flex;
  width: 20rem;

  & {
    height: 1.8rem;
  }

  & :focus {
    outline: none;
  }
`;

const InputWrapper = styled.div`
  display: flex
  widht: 15rem
  margin-left: 0.3rem;
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

const Button = styled.button`
  margin: 0px 0.3rem
  color: #4a69bd;
  background-color: transparent;
  border: solid 1px #4a69bd;
  border-radius: 9px;
  transition: color 0.4s, background-color 0.4s;

  &:hover {
    color: #fff
    background-color: #4a69bd;
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
        <Label for="todo">할 일 : </Label>
        <InputWrapper>
          <Input name="todo" id="todo" />
          <Button>등록</Button>
        </InputWrapper>
      </Form>
    );
  }
}

export default TodoForm;
