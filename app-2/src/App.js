import React, {Component} from 'react';
import './App.css';

class App extends Component {
  constructor(){
    super();

    this.state ={
      food: ['ice cream', 'sushi', 'peas', 'squash', 'chicken nuggets']
    }
  }

  render(){
    return (
      <div className='main-content'>
        {this.state.food.map((foodItem, i) =>  <h4 className='food-item' key={i}>{foodItem}</h4>)}
      </div>
    )
  }
}

export default App;
