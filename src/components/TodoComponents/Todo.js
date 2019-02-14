import React from 'react'
import './Todo.css';

export default function Todo({ todoList, markComplete }) {
  return (
      <ul>
        {
          todoList.length === 0 || todoList === null
          ? <h4>You are finished with all your tasks! Time to code!</h4>
          :
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
