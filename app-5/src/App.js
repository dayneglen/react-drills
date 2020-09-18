import React, {Component }from 'react';
import Image from './Components/Image';
import './App.css';


class App extends Component {
  constructor() {
    super();
    this.state = {
      img: 'https://img.srgcdn.com/e/UmpLY3o2Y1dlWmF3MUVtUVdiQ0cuanBn.jpg'
    }
  }
  

  render() {
    return(
      <div>
        <Image img={this.state.img} />
      </div>
    )
  }
}

export default App;

