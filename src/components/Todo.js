import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  width: 1.5rem;
  height: 1.5rem;
  margin-left: 0.3rem;
  padding-bottom: 1.3rem;
  color: #fff;
  background-color: #ff6b6b;
  border: 1px solid #ee5253;
  border-radius: 15px;

  &:focus {
    outline: none;
  }
`;

const Li = styled.li`
  display: flex;
  align-items: center;
  width: 100%;
  height: 3rem;
  margin: 1rem 0px;
  padding-left: 1rem;
  border: 0.1px solid #cfd6ee;
  box-shadow: 0px 3px 15px rgba(0, 0, 0, 0.1);
  box-sizing: border-box;
`;

const Todo = ({ title, id, status }) => {
  return (
    <Li data-id={id}>
      {title}
      <Button>x</Button>
    </Li>
  );
};

export default Todo;
