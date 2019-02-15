import React from 'react';
import styled from 'styled-components';
import TodoForm from './components/TodoComponents/TodoForm';
import TodoList from './components/TodoComponents/TodoList';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      todoList: JSON.parse(localStorage.getItem('todoList')) || [{ item: 'Code', completed: false, id: 0, display: true }],
    };
  }

  componentDidUpdate() {
    localStorage.removeItem('todoList');
    localStorage.setItem('todoList', JSON.stringify(this.state.todoList));
  }

  listUpdater = (input) => {
    this.setState(state => ({
      todoList: state.todoList.concat({
        item: input, completed: false, id: Date.now(), display: true,
      }),
    }));
  }

  markComplete = (idx) => {
    this.setState(oldState => {
      const newList = oldState.todoList;
      newList[idx].completed = !oldState.todoList[idx].completed;

      return { todoList: [...newList] };
    });
    document.getElementById(idx).classList.toggle('item-completed');
  }

  removeItem = () => {
    const removedList = this.state.todoList.filter(item => item.completed === false);
    this.setState({ todoList: [...removedList] });
    document.querySelectorAll('.item-completed').forEach(item => item.classList.remove('item-completed'));
  }

  searchListUpdater = (searchInput) => {
    this.resetSearch();

    this.setState(oldState => {
      const searchList = oldState.todoList.map(task => {
        const oneTask = task.item.toLowerCase();
        const dispStat = oneTask.includes(searchInput.toLowerCase());
        if (!dispStat) {
          return {
            ...task,
            display: false,
          };
        }

        return {
          ...task,
        };
      });

      return {
        todoList: searchList,
      };
    });
  }

  resetSearch = () => {
    this.setState(oldState => {
      const resetList = oldState.todoList.map(task => {
        return {
          ...task,
          display: true,
        };
      });

      return { todoList: resetList };
    });
  }

  render() {
    return (
      <StyledDiv>
        <TodoForm
          listUpdater={this.listUpdater}
          removeItem={this.removeItem}
          searchListUpdater={this.searchListUpdater}
          todoList={this.state.todoList}
          resetSearch={this.resetSearch}
        />

        <TodoList
          todoList={this.state.todoList}
          markComplete={this.markComplete}
        />
      </StyledDiv>
    );
  }
}

const StyledDiv = styled.div`
  font-family: 'Maven Pro', sans-serif;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: #0A4958;
  color: white;
`;

export default App;
