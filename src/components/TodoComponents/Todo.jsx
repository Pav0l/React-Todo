import React from 'react';
import './Todo.css';
import styled from 'styled-components';

export default function Todo({
  taskList,
  markComplete,
  onDragStart,
  onDragOver,
  onDrop,
  message,
  sideParam,
}) {
  return (
    <StyledUl
      onDragOver={e => onDragOver(e)}
      onDrop={e => onDrop(e, sideParam)}
    >
      {
        taskList.length === 0
          ? <StyledH4 side={sideParam}>{message}</StyledH4>
          :
          taskList.map((item, idx) => (
            <StyledLi
              key={idx}
              id={item.id}
              onClick={() => markComplete(item.id)}

              onDragStart={e => onDragStart(e, item.id)}
              // this attribute makes the element draggable
              draggable
              side={sideParam}
            >
              {item.item}
            </StyledLi>
          ))
      }
    </StyledUl>
  );
}

const StyledUl = styled.ul`  
  border-radius: 4px;
  list-style-type:none;
  padding-left: 0;
  padding: 1rem;
  background-color: #F6E7D2;
  min-height: 51px;
`;

const StyledLi = styled.li`
  font-size: 1.3rem;  
  padding: 10px;
  border: 1px solid white;
  border-radius: 4px;
  margin-top:2px;
  cursor: pointer;

  /* Adapt the colors based on side prop */
  background-color: ${props => (props.side === 'right' ? 'rgba(241, 136, 41, 1)' : '#01B6AD')};

  ::before {
    content: '🛠️';
    content: ${props => (props.side === 'right' ? '💣' : '🛠️')};
    margin-right: 5px;
  }
`;

const StyledH4 = styled.h4`
  font-size: 1.3rem;
  padding: 10px;
  border: 1px solid white;
  border-radius: 4px;
  text-align: center;

  background-color: ${props => (props.side === 'right' ? '#0A4958' : '#01B6AD')};

  ::before {
    content: '🚀';
    content: ${props => (props.side === 'right' ? '🏄' : '🚀')};
    margin-right: 5px;
  }
`;
