import React from 'react';
import TodoForm from './components/TodoComponents/TodoForm.js';
import TodoList from './components/TodoComponents/TodoList.js';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      todoList: JSON.parse(localStorage.getItem('todoList')) || [{item: 'Eat', completed: false, id: 0}],
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
    /*
    let newList = this.state.todoList.map((item,index) => {
      if(index === idx && item.completed === false) {
        item.completed = true;
      } else if (index === idx && item.completed === true) {
        item.completed = false;
      }
      return item;
    });
    */

    let newList = this.state.todoList;
    newList[idx].completed = !this.state.todoList[idx].completed;

    this.setState({todoList: [...newList]});
    document.getElementById(idx).classList.toggle('item-completed');
  }

  removeItem = () => {
    let removedList = this.state.todoList.filter(item => item.completed===false);
    this.setState({todoList: [...removedList]});
    document.querySelectorAll('.item-completed').forEach(item => item.classList.remove('item-completed'))
  }

  searchListUpdater = (searchInput) => {
    // filter list
    /*
    this.setState(st => {
      const initialList = st.todoList;
      const searchArr = st.todoList.filter((item) => item.item.includes(searchInput));

      return {
        todoList: [...searchArr],
      }
    });*/
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
        searchListUpdater={this.searchListUpdater}
        />
      </div>
    );
  }
}

export default App;