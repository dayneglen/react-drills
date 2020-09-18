import React, {Component} from 'react';

class NewTask extends Component {
    constructor(){
        super();
        this.state = {
            userInput: ''
        }
    }

    handleChange = e => {
        this.setState({userInput: e});
    }

    addItem = () => {
        this.props.addTask(this.state.userInput);
        this.setState({userInput: ''});
    }
  

    render(){
        return(
            <section>
                <input placeholder='Enter a New Task' value={this.state.userInput} onChange={ (e) => this.handleChange(e.target.value)}/>
                <button onClick={this.addItem} >Add</button>
            </section>
        )
    }
}

export default NewTask;