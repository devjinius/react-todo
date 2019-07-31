import React, { Component } from 'react';

class TodoForm extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <form>
        할일입력 : <input name="todo" />
        <button>등록</button>
      </form>
    );
  }
}

export default TodoForm;
