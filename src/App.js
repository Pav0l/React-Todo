import React from 'react';
import TodoForm from './components/TodoComponents/TodoForm.js';
import TodoList from './components/TodoComponents/TodoList.js';
import SearchForm from './components/TodoComponents/SearchForm.js';
import styled from 'styled-components';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      todoList: JSON.parse(localStorage.getItem('todoList')) || [{item: 'Code', completed: false, id: 0}],
      searchInput: '',
      searchList: [],
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
    console.log(document.getElementById(idx));
    document.getElementById(idx).classList.toggle('item-completed');
  }

  removeItem = () => {
    let removedList = this.state.todoList.filter(item => item.completed===false);
    this.setState({todoList: [...removedList]});
    document.querySelectorAll('.item-completed').forEach(item => item.classList.remove('item-completed'))
  }

  searchListUpdater = (searchInput) => {
    this.setState(oldState => {
      const currentList = oldState.todoList.filter(task => task.item.includes(searchInput));

      return {
        todoList: [...currentList],
        searchList: [],
      }
    })

  }

  searchHandler = event => {
    this.setState({
      searchInput: event.target.value,
    }, /*() => {
      if(this.searchInput === "") {

      } else {
        this.props.searchListUpdater(this.state.searchInput);
      }} */ 
    );  
  }

  stateSaver = () => {
    if(this.state.stateSaver === []) {
    this.setState({ stateSaver: [...this.props.todoList]/* PASS THE todoList state here */ })
    }
  }

  render() {
    return (
      <StyledDiv>
        <TodoForm
        listUpdater={this.listUpdater}
        removeItem={this.removeItem}
        searchListUpdater={this.searchListUpdater}
        todoList={this.state.todoList}
        />

        <SearchForm
        searchInput={this.state.searchInput}
        searchHandler={this.state.searchHandler}
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