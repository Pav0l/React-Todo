import React from 'react';
import './Todo.css';
import Todo from './Todo';
import styled from 'styled-components';

export default function TodoList({ todoList, markComplete }) {
  return (
    <StyledTodoListDiv>
      <StyledH2>Things I want to do: </StyledH2>
      
      <Todo
      todoList={todoList}
      markComplete={markComplete}
      />
    </StyledTodoListDiv>
  );
}

const StyledTodoListDiv = styled.div`
  width: 50%;
  padding: 0 20px 20px;
  max-width: 500px;
`;

const StyledH2 = styled.h2`
  text-decoration: underline;
  font-size: 1.8rem;
`;