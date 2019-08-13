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

const Item = styled.li`
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

const TodoTitle = styled.p`
  text-decoration: ${props => (props.status === 'done' ? 'line-through' : 'none')};
`;

const Todo = ({ title, id, status, onRemoveClick, toggleStatus }) => {
  return (
    <Item data-id={id} onClick={toggleStatus}>
      <TodoTitle status={status}>{title}</TodoTitle>
      <Button
        onClick={e => {
          e.stopPropagation();
          onRemoveClick(id);
        }}
      >
        x
      </Button>
    </Item>
  );
};

export default Todo;
