import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';

import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

const MainWrapper = styled.div`
  background-color: #dff9fb;
`;

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <MainWrapper>
        <TodoForm />
        <TodoList />
      </MainWrapper>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
