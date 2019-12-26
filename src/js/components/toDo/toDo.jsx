import React, { Component } from 'react';
import ToDoInput from './toDoInput.jsx';
import ToDoTasklist from './toDoTasklist.jsx';

class ToDo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tasks: new Map()
        };

        this.addTask = this.addTask.bind(this);
        this.delTask = this.delTask.bind(this);
    }

    addTask(task) {
        this.setState(state => {
            state.tasks.set(task.id, task.content);
            return { tasks: state.tasks };
        });
    }

    delTask(id) {
        this.setState(state => {
            state.tasks.delete(id);
            return { tasks: state.tasks };
        });
    }

    render() {
        return (
            <div className="todo">
                <div className="container todo__container">
                    <h1 className="todo__title">What to do. Organize your work</h1>
                    <ToDoInput addTask={this.addTask} />
                    <ToDoTasklist delTask={this.delTask} tasks={this.state.tasks}/>
                </div>
            </div>
        );
    }
}

export default ToDo;
