import React, { Component } from 'react';
import ToDoTask from './toDoTask.jsx';

class ToDoTasklist extends Component {
    render() {
        const tasks = this.props.tasks.map(task => {
            return <ToDoTask task={task} key={task}/>;
        })
        return (
            <div className="todo-tasklist">
                <ul>{tasks}</ul>
            </div>
        );
    }
}

export default ToDoTasklist;
