import React from 'react';
import styled, { css, keyframes } from 'styled-components';

const highlight = keyframes`
  25% {
    transform: scale(1.3);
  }

  100% {
    transform: scale(1.0);
  }
`;

const highlightAnimation = css`
  animation: ${highlight} 1s ease;
`;

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
  ${highlightAnimation}

  &:hover {
    transform: scale(1.3);
  }
`;

const Counter = ({ children, color, status }) => {
  return (
    // key={children} 이 부분은
    // children이 변경되면 rerender가 발생해서 animation이 항상 작동하도록 의도함
    <Circle color={color} status={status} key={children}>
      {children}
    </Circle>
  );
};

export default Counter;
