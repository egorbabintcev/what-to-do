import React, { Component } from 'react';

class ToDoTask extends Component {
    render() {
        return (
            <li className="todo-task">
                <input type="checkbox"/>
                <span className="todo-task__value">{this.props.task}</span>
            </li>
        );
    }
}

export default ToDoTask;
