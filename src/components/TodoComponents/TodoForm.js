import React from 'react';
import './Todo.css';

class TodoForm extends React.Component {
  state = {
    textInput: '',
  }

  clearInput = () => {
    this.setState({ textInput: '' });
  }

  addTodo = () => {
    // run function that updates the list from the App.js
    this.props.listUpdater(this.state.textInput);
    this.clearInput();
  }

  removeCompleted = () => {
    // run function that removes completed buttons from the list
    this.props.removeItem();
  }


  changeHandler = event => {
    this.setState({
      textInput: event.target.value,
    });
  }

  render() {
    return (
      <div>
        <input
          type="text"
          value={this.state.textInput}
          onChange={this.changeHandler}
        />

        <button onClick={this.addTodo}>Add Todo</button>
        <button onClick={this.removeCompleted}>Remove completed</button>
      </div>
    );
  }
}

export default TodoForm;