import React, { useState, useReducer } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

import Header from './Header';
import TodoForm from './TodoForm';
import TodoShow from './TodoShow';

import { todoReducer } from '../reducer';
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
  const [error, setError] = useState('');
  const [todos, dispatch] = useReducer(todoReducer, [{ title: '', id: '', status: 'todo' }]);

  const todoInitFn = data => dispatch({ type: 'INIT', payload: data });

  const loading = useFetch({
    fn: todoInitFn,
    errorFn: setError,
    url: 'http://localhost:3000/todos'
  });

  return (
    <>
      <GlobalStyle />
      <GlobalContext.Provider value={{ todos, dispatch, error, loading }}>
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
