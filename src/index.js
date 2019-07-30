import React from 'react';
import ReactDOM from 'react-dom';

function App() {
  return (
    <form>
      할일입력 : <input name="todo" />
      <button>등록</button>
    </form>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
