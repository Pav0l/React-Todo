import React from 'react';
import TodoForm from './components/TodoComponents/TodoForm.js';
import TodoList from './components/TodoComponents/TodoList.js';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      todoList: JSON.parse(localStorage.getItem('todoList')) || [{item: 'Code', completed: false, id: 0}],
      // originalList: [],
    };
  }

  
  componentDidUpdate() {
    localStorage.removeItem('todoList');
    localStorage.setItem('todoList', JSON.stringify(this.state.todoList));
  }
  

  listUpdater = (input) => {
    this.setState(state => ({
      todoList: state.todoList.concat({item: input, completed: false, id: Date.now()})
    }));
  }

  markComplete = (idx) => {
    this.setState(oldState => {
      const newList = oldState.todoList;
      newList[idx].completed = !oldState.todoList[idx].completed;

      return { todoList: [...newList] }
    })
    document.getElementById(idx).classList.toggle('item-completed');
  }

  removeItem = () => {
    let removedList = this.state.todoList.filter(item => item.completed===false);
    this.setState({todoList: [...removedList]});
    document.querySelectorAll('.item-completed').forEach(item => item.classList.remove('item-completed'))
  }

  searchListUpdater = (searchInput) => {
    // // filter list
    // localStorage.removeItem('origList');
    // localStorage.setItem('origList', JSON.stringify(this.state.todoList));
    // if(searchInput.length > 0) {
    //   this.setState(prevState => {
    //     const searchList = prevState.todoList.filter(task => task.item.includes(searchInput));

    //     return {
    //       todoList: [...searchList],
    //     }
    //   })
    // } else {
    //   const origList = JSON.parse(localStorage.getItem('origList'))
    //   this.setState({ todoList: [...origList]})
    // }
  }

  render() {
    return (
      <div>
        <TodoForm
        listUpdater={this.listUpdater}
        removeItem={this.removeItem}
        searchListUpdater={this.searchListUpdater}
        />

        <TodoList
          todoList={this.state.todoList}
          markComplete={this.markComplete}
        />
      </div>
    );
  }
}

export default App;