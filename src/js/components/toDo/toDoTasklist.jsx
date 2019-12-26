import React, { Component } from 'react';
import ToDoTask from './toDoTask.jsx';

class ToDoTasklist extends Component {
    render() {
        const tasks = [];

        for (let task of this.props.tasks) {
            tasks.push(
                <ToDoTask
                 key={task[0]}
                 id={task[0]}
                 value={task[1]}
                 delTask={this.props.delTask}/>
            );
        };

        return (
            <div className="todo-tasklist">
                <ul>{tasks}</ul>
            </div>
        );
    }
}

export default ToDoTasklist;
