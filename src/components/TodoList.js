import React, { Component } from 'react';
import styled from 'styled-components';

import Todo from './Todo';
import Button from './BasicButton';

const Header = styled.div`
  width: 100%;
  padding: 1rem 0px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

class TodoList extends Component {
  constructor(props) {
    super(props);
  }

  clickHandler(e) {
    console.log('접었다!');
  }

  render() {
    return (
      <>
        <Header>
          <h3>해야할 일들</h3>
          <Button height="2.5rem" onClick={this.clickHandler.bind(this)}>
            접기
          </Button>
        </Header>

        <ul>
          <Todo />
          <Todo />
          <Todo />
          <Todo />
        </ul>
      </>
    );
  }
}

export default TodoList;
