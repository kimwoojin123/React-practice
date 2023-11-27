import React from 'react';
import './App.css';
import TodoList from './TodoList'; // TodoList 컴포넌트를 불러옵니다.

function App() {
  return (
    <div className="App">
      <TodoList /> {/* TodoList 컴포넌트를 렌더링합니다. */}
    </div>
  );
}

export default App;