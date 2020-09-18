import React, {Component} from 'react';

class Todo extends Component {
    
    render(){
        return (
            <section>
                <h3>{this.props.task}</h3>
            </section>
         
        )
    }
}

export default Todo;