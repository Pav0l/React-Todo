import React from 'react';
import TodoForm from './components/TodoComponents/TodoForm.js';
import TodoList from './components/TodoComponents/TodoList.js';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      todoList: [{item: 'Eat', completed: false}],
    };
  }

  listUpdater = (input) => {
    this.setState(state => ({
      todoList: state.todoList.concat({item: input, completed: false, id: Date.now()})
    }))
  }

  markComplete = (idx) => {
    let newList = this.state.todoList.map((item,index) => {
      if(index === idx && item.completed === false) {
        item.completed = true;
      } else if (index === idx && item.completed === true) {
        item.completed = false;
      }
      return item;
    });
    this.setState({todoList: [...newList]});
    document.getElementById(idx).classList.toggle('item-completed');
  }

  removeItem = () => {
    let removedList = this.state.todoList.filter(item => item.completed===false);
    this.setState({todoList: [...removedList]});
    document.querySelectorAll('.item-completed').forEach(item => item.classList.remove('item-completed'))
  }

  render() {
    return (
      <div>

        <TodoList
          todoList={this.state.todoList}
          markComplete={this.markComplete}
        />

        <TodoForm
        listUpdater={this.listUpdater}
        removeItem={this.removeItem}
        />
      </div>
    );
  }
}

export default App;