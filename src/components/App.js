import React, { useState, useEffect } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

import Header from './Header';
import TodoForm from './TodoForm';
import TodoShow from './TodoShow';

import useFetch from '../hooks/useFetch';

const GlobalStyle = createGlobalStyle`
  ${normalize}
`;

const Wrapper = styled.div`
  width: 1024px;
  margin: 0 auto;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Conetents = styled.div`
  width: 900px;
  margin: 2rem;
  box-sizing: border-box;
`;

export const GlobalContext = React.createContext();

const App = () => {
  const [todos, setTodos] = useState([]);
  const [error, setError] = useState('');

  const loading = useFetch({
    fn: setTodos,
    errorFn: setError,
    url: 'http://localhost:3000/todos'
  });

  return (
    <>
      <GlobalStyle />
      <GlobalContext.Provider value={{ todos, setTodos, error, loading }}>
        <Wrapper>
          <Header />
          <Conetents>
            <TodoForm />
            <TodoShow />
          </Conetents>
        </Wrapper>
      </GlobalContext.Provider>
    </>
  );
};

export default App;
