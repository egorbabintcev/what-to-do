import React, { Component } from 'react';

class ToDoTask extends Component {
    constructor(props) {
        super(props);
        this.handleDelete = this.handleDelete.bind(this);
    }

    handleDelete() {
        this.props.delTask(this.props.task[0]);
    }

    render() {
        return (
            <li className="todo-task">
                <input type="checkbox"/>
                <span className="todo-task__value">{this.props.task[1]}</span>
                <button onClick={this.handleDelete}>delete</button>
            </li>
        );
    }
}

export default ToDoTask;
