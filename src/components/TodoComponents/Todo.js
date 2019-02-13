import React from 'react'
import './Todo.css';

export default function Todo({ todoList, markComplete }) {
  return (
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
  );
}
