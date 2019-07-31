import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

const GlobalStyle = createGlobalStyle`
  ${normalize}
`;

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <GlobalStyle />
        <TodoForm />
        <TodoList />
      </>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
