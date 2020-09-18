import React, {Component} from 'react';
import NewTask from './Components/NewTask';
import List from './Components/List';

import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      todoList: []
    }
  }

  addTodoItem = (task) => {
    this.setState({todoList: [...this.state.todoList, task]});
  }

  render(){
    return(
      <div className='main-content'>
        <h1>My to-do List:</h1>
        <NewTask addTask={this.addTodoItem}/>
        <List todoList={this.state.todoList}/>
      </div>
    )
  }


}

export default App;
