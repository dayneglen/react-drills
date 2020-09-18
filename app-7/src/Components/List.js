import React, {Component} from 'react';
import Todo from './Todo';

class List extends Component {
    render(){
        return (
            <div>
                {this.props.todoList.map((todo, i) => <Todo key={i} todo={todo}/>)}
            </div>
        )  
    }
}

export default List;