import React, { Component } from 'react';
import ToDoTask from './toDoTask.jsx';

class ToDoTasklist extends Component {
    render() {
        const tasks = this.props.tasks.map(task => {
            return (
                <ToDoTask
                    key={task.id}
                    id={task.id}
                    value={task.value}
                    delTask={this.props.delTask}
                    changeTask={this.props.changeTask} />
            );
        })

        return (
            <div className="todo-tasklist">
                <ul>{tasks}</ul>
            </div>
        );
    }
}

export default ToDoTasklist;
