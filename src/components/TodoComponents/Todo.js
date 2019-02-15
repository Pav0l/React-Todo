import React from 'react';
import './Todo.css';
import styled from 'styled-components';

export default function Todo({ todoList, markComplete }) {
  const isVisible = todoList.filter(task => task.display === true);
  return (
    <StyledUl>
      {
        todoList.length === 0
        ? <StyledH4>You are finished with all your tasks! Time to code!</StyledH4>
        :
        isVisible.map((item, idx) => (
          <StyledLi
            key={idx}
            id={idx}
            onClick={() => markComplete(idx)}
          >
          {item.item}</StyledLi>
        ))
      }
    </StyledUl>
  );
}

const StyledUl = styled.ul`  
  border-radius: 4px;
  list-style-type:none;
  padding-left: 0;
`;

const StyledLi = styled.li`
  font-size: 1.3rem;
  background-color: #01B6AD;
  padding: 10px;
  border: 1px solid white;
  border-radius: 4px;
  margin-top:2px;
  cursor: pointer;

  ::before {
    content: '🛠️';
    margin-right: 5px;
  }
`;

const StyledH4 = styled.h4`
  font-size: 1.3rem;
  background-color: #01B6AD;
  padding: 10px;
  border: 1px solid white;
  border-radius: 4px;
  text-align: center;

  ::before {
    content: '🚀';
    margin-right: 5px;
  }
`;
