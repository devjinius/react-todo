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

const Ul = styled.ul`
  padding-left: 2rem;
`;

class TodoList extends Component {
  constructor(props) {
    super(props);

    this.state = { todos: [] };
  }

  async componentDidMount() {
    const { body } = await this.getData();
    this.setState({ todos: body });
  }

  async getData() {
    try {
      const rawData = await fetch(
        'https://h3rb9c0ugl.execute-api.ap-northeast-2.amazonaws.com/develop/todolist'
      );
      return rawData.json();
    } catch (e) {
      console.log(e);
      return { body: [], error: e };
    }
  }

  getTodos() {
    const { todos } = this.state;
    return todos.map(todo => <Todo key={todo.id} {...todo} />);
  }

  clickHandler(e) {
    console.log('접었다!');
  }

  render() {
    const todos = this.getTodos();

    return (
      <>
        <Header>
          <h3>해야할 일들</h3>
          <Button onClick={this.clickHandler.bind(this)}>접기</Button>
        </Header>

        <Ul>{todos}</Ul>
      </>
    );
  }
}

export default TodoList;
