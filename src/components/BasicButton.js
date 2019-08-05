import React, { Component } from 'react';
import styled from 'styled-components';

const Button = styled.button`
  margin: 0px 0.3rem;
  height: ${props => props.height || '1.8rem'};
  color: #4a69bd;
  background-color: transparent;
  border: solid 1px #4a69bd;
  border-radius: 9px;
  transition: color 0.4s, background-color 0.4s;

  &:hover {
    color: #fff
    background-color: #4a69bd;
  }

  &:focus{
    outline: none;
  }
`;

class BasicButton extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { height } = this.props;
    return (
      <Button height={height} onClick={this.props.onClick}>
        {this.props.children}
      </Button>
    );
  }
}

export default BasicButton;
