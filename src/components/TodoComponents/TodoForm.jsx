import React from 'react';
import './Todo.css';
import styled from 'styled-components';

class TodoForm extends React.Component {
  state = {
    textInput: '',
    searchInput: '',
  }


  clearInput = () => {
    this.setState({ textInput: '' });
  }

  addTodo = (e) => {
    // run function that updates the list from the App.js
    this.props.listUpdater(this.state.textInput);
    this.clearInput();
    e.preventDefault();
  }

  removeCompleted = (e) => {
    // run function that removes completed buttons from the list
    this.props.removeItem();
    e.preventDefault();
  }

  changeHandler = event => {
    this.setState({
      textInput: event.target.value,
    });
  }

  searchHandler = (event) => {
    event.preventDefault();

    this.setState({
      searchInput: event.target.value,
    }, () => {
      if (this.searchInput !== '') {
        this.props.searchListUpdater(this.state.searchInput);
      }
    });
  }

  render() {
    return (
      <StyledForm>
        <StyledInput
          type="text"
          placeholder="What to do?"
          value={this.state.textInput}
          onChange={this.changeHandler}
        />

        <StyledButton onClick={this.addTodo}>Add task</StyledButton>
        <StyledButton onClick={this.removeCompleted}>Remove completed</StyledButton>

        <StyledInput
          type="text"
          placeholder="Search to-do list"
          value={this.state.searchInput}
          onChange={this.searchHandler}
        />

      </StyledForm>
    );
  }
}

const StyledForm = styled.form`
  background-color: #01B6AD;
  color: white;
  padding: 20px;
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  width: 50%;
  max-width: 500px;
`;

const StyledInput = styled.input`
  padding: 15px 10px;
  margin-bottom: 10px;
  border-radius: 4px;
  border: 1px solid #0A4958;
  text-align: center;
`;

const StyledButton = styled.button`
  padding: 10px;
  margin-bottom: 10px;
  background-color: #F6E7D2;
  border: 1px solid #0A4958;
  color: #0A4958;
  border-radius: 4px;
  text-align: center;
  font-weight: 700;
  cursor: pointer;
  transition: background-color 0.2s ease 0s;

  :hover {
    background-color: #F6E7D2;
    color: #01B6AD;
    border: 1px solid #01B6AD;
    transition: background-color 0.2s ease 0s;
}
`;


export default TodoForm;
