import React, { Component } from 'react';
import ToDoInput from './toDoInput.jsx';
import ToDoTasklist from './toDoTasklist.jsx';

class ToDo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tasks: []
        };

        this.addTask = this.addTask.bind(this);
        this.delTask = this.delTask.bind(this);
        this.changeTask = this.changeTask.bind(this);
    }

    addTask(task) {
        this.setState(state => {
            state.tasks.push(task);
            return { tasks: state.tasks };
        });
    }

    delTask(id) {
        this.setState(state => {
            const index = this.state.tasks.find(task => task.id === id);
            state.tasks.splice(index, 1);
            return { tasks: state.tasks };
        });
    }

    changeTask(id, value) {
        this.setState(state => {
            const index = state.tasks.findIndex(task => task.id === id);
            state.tasks[index]["value"] = value;
            return { tasks: state.tasks };
        });
    }

    render() {
        return (
            <div className="todo">
                <div className="container todo__container">
                    <h1 className="todo__title">What to do. Organize your work</h1>
                    <ToDoInput addTask={this.addTask} />
                    <ToDoTasklist delTask={this.delTask} changeTask={this.changeTask} tasks={this.state.tasks}/>
                </div>
            </div>
        );
    }
}

export default ToDo;
