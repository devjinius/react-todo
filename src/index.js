import React from 'react';
import ReactDOM from 'react-dom';

function App() {
  return (
    <>
      <form>
        할일입력 : <input name="todo" />
        <button>등록</button>
      </form>
      <div>
        <h3>해야할 일들</h3>
        <ul>
          <li>공부하기</li>
          <li>공부하기</li>
          <li>공부하기</li>
          <li>공부하기</li>
        </ul>
      </div>
    </>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
