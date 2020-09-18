import React, {Component} from 'react';
import './App.css';

class App extends Component {
  constructor(){
    super();

    this.state = {
      userInput: '',
      food: ['ice cream', 'sushi', 'peas', 'squash', 'chicken nuggets']
    }
  }

  handleChange = (val) => {
    this.setState({userInput: val})
  }

  render() {
    let filteredArray = this.state.food.filter((food) => food.includes(this.state.userInput)).map((food, i) => <h4 key={i}>{food}</h4>)
    
    return (
      <div className='main-content'>
        <input value={this.state.userInput} onChange={(e) => this.handleChange(e.target.value)}/>
        {filteredArray}
      </div>
    )
  }
}


export default App;
