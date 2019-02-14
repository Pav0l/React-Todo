import React from 'react'
import './Todo.css';
import Todo from './Todo';

export default function TodoList({ todoList, markComplete }) {
  return (
    <div>
      <h2>Todo List: MVP </h2>
      
      <Todo
      todoList={todoList}
      markComplete={markComplete}
      />
    </div>
  );
}
