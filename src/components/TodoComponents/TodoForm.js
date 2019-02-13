import React from 'react';
import './Todo.css';

class TodoForm extends React.Component {
  state = {
    textInput: '',
    searchInput: '',
  }

  // componentDidUpdate() {
  //   this.props.searchListUpdater(this.state.searchInput);
  // }

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

  searchHandler = event => {
    this.setState({
      searchInput: event.target.value,
    });
    this.props.searchListUpdater(this.state.searchInput);
  }

  render() {
    return (
      <div>
        <input
          type="text"
          placeholder="What to do?"
          value={this.state.textInput}
          onChange={this.changeHandler}
        />

        <button onClick={this.addTodo}>Add Todo</button>
        <button onClick={this.removeCompleted}>Remove completed</button>

        <div>
          <input
            type="text"
            placeholder="Search the list"
            value={this.state.searchInput}
            onChange={this.searchHandler}
          />
        </div>
      </div>
    );
  }
}

export default TodoForm;