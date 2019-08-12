import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import styled, { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

import TodoForm from './components/TodoForm';
import TodoShow from './components/TodoShow';

const GlobalStyle = createGlobalStyle`
  ${normalize}
`;

const ContentWrapper = styled.div`
  width: 500px;
  margin: 2rem;
  box-sizing: border-box;
`;

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <GlobalStyle />
        <ContentWrapper>
          <TodoForm />
          <TodoShow />
        </ContentWrapper>
      </>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
