import React from 'react';
import styled from 'styled-components';

import Counter from './Counter';

const Wrapper = styled.div`
  width: 100%;
  padding: 2rem;
  box-sizing: border-box;
  text-align: right;
`;

const Header = () => {
  return (
    <Wrapper>
      <Counter color={'#27ae60'} status={'todo'}>
        12
      </Counter>
      <Counter color={'#c1adae'} status={'done'}>
        3
      </Counter>
    </Wrapper>
  );
};

export default Header;
