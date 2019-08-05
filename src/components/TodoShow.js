import React, { Component } from 'react';
import styled from 'styled-components';

import TodoList from './TodoList';
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

class TodoShow extends Component {
  constructor(props) {
    super(props);

    this.state = { todos: [], error: 0 };
  }

  async componentDidMount() {
    const { body, error } = await this.getData();
    this.setState({ todos: body, error });
  }

  async getData() {
    try {
      const rawData = await fetch(
        'https://h3rb9c0ugl.execute-api.ap-northeast-2.amazonaws.com/develop/todolist/'
      );
      const jsonData = await rawData.json();

      if (/^2/.test(jsonData.statusCode)) {
        return jsonData;
      }

      if (/^4/.test(jsonData.statusCode)) {
        throw new Error(`clientError statusCode: ${jsonData.statusCode}`);
      }

      if (/^5/.test(jsonData.statusCode)) {
        throw new Error(`serverError statusCode: ${jsonData.statusCode}`);
      }

      throw new Error(`알 수 없는 에러입니다. errorData : ${jsonData}`);
    } catch (e) {
      console.log(e);
      return { body: [], error: e };
    }
  }

  clickHandler(e) {
    console.log('접었다!');
  }

  render() {
    const { todos, error } = this.state;
    const todoComponents = !!error ? '=( 에러가 발생했습니다.' : <TodoList todos={todos} />;

    return (
      <>
        <Header>
          <h3>해야할 일들</h3>
          <Button onClick={this.clickHandler.bind(this)}>접기</Button>
        </Header>
        {todoComponents}
      </>
    );
  }
}

export default TodoShow;
