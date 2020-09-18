import React, { Component } from 'react';

class Todo extends Component {

    render() {
        return (
            <section>
                <h3>{this.props.todo}</h3>
            </section>

        )
    }
}

export default Todo;