import React from 'react';
import './Todo.css';
import styled from 'styled-components';
import Todo from './Todo';

export default function TodoList({ todoList, markComplete, onDragStart, onDragOver, onDrop }) {
  const isRight = todoList.filter(task => task.category === 'right');

  return (
    <WrapperDiv>
      <StyledTodoListDiv>
        <StyledH2>Things I want to do: </StyledH2>

        <Todo
          todoList={todoList}
          markComplete={markComplete}
          onDragStart={onDragStart}
          onDragOver={onDragOver}
          onDrop={onDrop}
        />
      </StyledTodoListDiv>

      <StyledTodoListDiv>
        <StyledH2>High priority things: </StyledH2>

        <DragMeInUl
          onDragOver={e => onDragOver(e)}
          onDrop={e => onDrop(e, 'right')}
        >
          {
            isRight.map((item, idx) => (
              <StyledLiR
                key={idx}
                id={idx}
                onClick={() => markComplete(idx)}

                onDragStart={e => onDragStart(e, item.id)}
                // this attribute makes the element draggable
                draggable
              >
                {item.item}
              </StyledLiR>
            ))
          }

        </DragMeInUl>

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

const DragMeInUl = styled.ul`
  background-color: white;
  padding: 0 20px;
  margin-bottom: 20px;
  max-width: 500px;
  width: 60%;
  height: 70%;
  border-radius: 4px;
`;

const StyledLiR = styled.li`
  font-size: 1.3rem;
  background-color: #01B6AD;
  padding: 10px;
  border: 1px solid white;
  border-radius: 4px;
  margin-top:2px;
  cursor: pointer;

  ::before {
    content: '💣';
    margin-right: 5px;
  }
`;