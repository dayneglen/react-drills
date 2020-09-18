import React, {Component} from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      userInput: ''
    }
  }

  handleChange(val) {
    this.setState({userInput: val});
  }

  render(){
    return(
      <div className='main-content'>
        <input placeholder='Type something fantastic' value={this.state.userInput} onChange={ (e) => this.handleChange(e.target.value)}/>
        <p>{this.state.userInput}</p>
      </div>
    )
  }
}

export default App;
