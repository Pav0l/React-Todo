import React from 'react'
import './Todo.css';

export default function TodoList({ todoList, markComplete }) {
  return (
    <div>
      <h2>Todo List: MVP </h2>
      <ul>
        {
          todoList.map((item, idx) => (
            <li
              key={idx}
              id={idx}
              onClick={() => markComplete(idx)}
            >
            {item.item}</li>
          ))
        }
      </ul>
    </div>
  );
}
