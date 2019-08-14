import React from 'react';
import styled from 'styled-components';

const Circle = styled.div`
  width: 5rem;
  height: 5rem;
  line-height: 5rem;
  display: inline-block;
  margin: 0 1rem;
  background-color: ${props => props.color};
  border-radius: 50%;
  text-align: center;
  vertical-align: middle;
  color: #fff;
  font-size: 2rem;
  text-decoration: ${props => (props.status === 'done' ? 'line-through' : 'none')};
  transition: transform 0.4s ease;

  &:hover {
    transform: scale(1.3);
  }
`;

const Counter = ({ children, color, status }) => {
  return (
    <Circle color={color} status={status}>
      {children}
    </Circle>
  );
};

export default Counter;
