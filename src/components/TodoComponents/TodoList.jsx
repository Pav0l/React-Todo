import React from 'react';
import './Todo.css';
import styled from 'styled-components';
import Todo from './Todo';

export default function TodoList({
  todoList,
  markComplete,
  onDragStart,
  onDragOver,
  onDrop,
}) {
  const isLeft = todoList.filter(task => task.display === true && task.category === 'left');
  const finishedMsg = 'You are finished with all your tasks! Time to code again!';

  const isRight = todoList.filter(task => task.display === true && task.category === 'right');
  const fireMsg = 'Nothing on fire, carry on.';

  return (
    <WrapperDiv>
      <StyledTodoListDiv>
        <StyledH2>Things I want to do: </StyledH2>

        <Todo
          taskList={isLeft}
          markComplete={markComplete}
          onDragStart={onDragStart}
          onDragOver={onDragOver}
          onDrop={onDrop}
          message={finishedMsg}
          sideParam='left'
        />
      </StyledTodoListDiv>

      <StyledTodoListDiv>
        <StyledH2>High priority things: </StyledH2>

        <Todo
          taskList={isRight}
          markComplete={markComplete}
          onDragStart={onDragStart}
          onDragOver={onDragOver}
          onDrop={onDrop}
          message={fireMsg}
          sideParam='right'
        />

      </StyledTodoListDiv>

    </WrapperDiv>
  );
}

const WrapperDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  width: 95%;
`;

const StyledTodoListDiv = styled.div`
  width: 30%;
  padding: 0 20px 20px;
  max-width: 500px;
`;

const StyledH2 = styled.h2`
  text-decoration: underline;
  font-size: 1.5rem;
`;
