import React, { useState } from 'react';

const TodoList = () => {
  // 할 일 목록을 저장할 상태(state)를 정의합니다.
  const [todos, setTodos] = useState([]);
  // 사용자가 입력한 새로운 할 일을 저장할 상태를 정의합니다.
  const [newTodo, setNewTodo] = useState('');

  // 새로운 할 일을 추가하는 함수를 정의합니다.
  const addTodo = () => {
    if (newTodo.trim() !== '') {
      setTodos([...todos, newTodo]); // 기존 할 일 목록에 새로운 할 일을 추가합니다.
      setNewTodo(''); // 입력 필드를 초기화합니다.
    }
  };

  // 할 일 목록을 화면에 표시합니다.
  const todoItems = todos.map((todo, index) => (
    <li key={index}>{todo}</li>
  ));

  return (
    <div>
      <h1>할 일 목록</h1>
      <input
        type="text"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
        placeholder="할 일을 입력하세요"
      />
      <button onClick={addTodo}>추가</button>
      <ul>{todoItems}</ul>
    </div>
  );
};

export default TodoList;