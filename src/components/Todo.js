import React, { Component } from 'react';

class Todo extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { title, id, status } = this.props;
    return <li id={id}>{title}</li>;
  }
}

export default Todo;
