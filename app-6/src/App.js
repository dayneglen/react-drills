import React, {Component} from 'react';
import Todo from './Components/Todo';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      todoList: [],
      userInput: ''
    }
  }

  handleChange = e => {
    this.setState({userInput: e});
  }

  addTodo = () => {
    this.state.todoList.push(this.state.userInput);
    this.setState({userInput: ''});
  }

  render(){

    return(
      <div className='main-container'>
        <h1>My to-do list app:</h1>
        <section>
          <input placeholder='Enter new task' value={this.state.userInput} onChange={(e) => this.handleChange(e.target.value)} />
          <button onClick={this.addTodo} >Add</button>
        </section>
        
        {this.state.todoList.map((todo, i) =>  <Todo key={i} task={todo}/>)}
      </div>
    )
  }
}

export default App;
