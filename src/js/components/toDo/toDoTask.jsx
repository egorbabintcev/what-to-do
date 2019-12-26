import React, { Component } from 'react';

class ToDoTask extends Component {
    constructor(props) {
        super(props);
        this.state = {
            checked: false,
            editing: false,
            input: this.props.value
        };

        this.handleDelete = this.handleDelete.bind(this);
        this.handleCheck = this.handleCheck.bind(this);
        this.handleEdit = this.handleEdit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleChangesAccept = this.handleChangesAccept.bind(this);
        this.handleKeyPress = this.handleKeyPress.bind(this);
    }

    handleDelete() {
        this.props.delTask(this.props.id);
    }

    handleCheck() {
        this.setState(state => {
            return { checked: !state.checked };
        });
    }

    handleEdit() {
        this.setState(state => {
            return { editing: !state.editing };
        });
    }

    handleChange(e) {
        this.setState({ input: e.target.value });
    }

    handleChangesAccept() {
        this.props.changeTask(this.props.id, this.state.input);
        this.handleEdit();
    }

    handleKeyPress(e) {
        if (e.key === 'Enter') {
            this.handleChangesAccept()
        } else if (e.key === 'Escape') {
            this.handleEdit()
        }
    }

    render() {
        const checked = this.state.checked ? 'todo-task__value_checked' : '';
        let task;
        let buttonSet;
        if (this.state.editing) {
            task = <input
                className={`todo-task__value ${checked}`}
                type="text"
                value={this.state.input}
                onChange={this.handleChange} />;
            buttonSet = (
                <>
                    <button className="todo-task__button" onClick={this.handleChangesAccept}>
                        <i className="fas fa-fw fa-check todo-task__button-icon"></i>
                    </button>
                    <button className="todo-task__button" onClick={this.handleEdit}>
                        <i className="fas fa-fw fa-times todo-task__button-icon"></i>
                    </button>
                </>
            );
        } else {
            task = <p className={`todo-task__value ${checked}`}>{this.props.value}</p>;
            buttonSet = (
                <>
                    <button className="todo-task__button" onClick={this.handleEdit}>
                        <i className="fas fa-fw fa-edit todo-task__button-icon"></i>
                    </button>
                    <button className="todo-task__button" onClick={this.handleDelete}>
                        <i className="fas fa-fw fa-trash todo-task__button-icon"></i>
                    </button>
                </>
            )
        }

        return (
            <li className="todo-task" onKeyUp={this.handleKeyPress}>
                <input type="checkbox" id={this.props.id} onChange={this.handleCheck}/>
                <label className="todo-task__checkbox" htmlFor={this.props.id}></label>
                <div className="todo-task__value-container">
                    {task}
                </div>
                {buttonSet}
            </li>
        );
    }
}

export default ToDoTask;
