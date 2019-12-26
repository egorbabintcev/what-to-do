import React, { Component } from 'react';

class ToDoTask extends Component {
    constructor(props) {
        super(props);
        this.state = {
            checked: false
        };

        this.handleDelete = this.handleDelete.bind(this);
        this.handleCheck = this.handleCheck.bind(this);
    }

    handleDelete() {
        this.props.delTask(this.props.id);
    }

    handleCheck() {
        this.setState(state => {
            return { checked: !state.checked };
        });
    }

    render() {
        const checked = this.state.checked ? 'todo-task__value_checked' : '';
        return (
            <li className="todo-task">
                <input type="checkbox" id={this.props.id} onChange={this.handleCheck}/>
                <label className="todo-task__checkbox" htmlFor={this.props.id}></label>
                <div className="todo-task__value-container">
                    <p className={`todo-task__value ${checked}`}>{this.props.value}</p>
                </div>
                <button className="todo-task__button" onClick={this.handleDelete}>
                    <i className="fas fa-trash todo-task__button-icon"></i>
                </button>
            </li>
        );
    }
}

export default ToDoTask;
