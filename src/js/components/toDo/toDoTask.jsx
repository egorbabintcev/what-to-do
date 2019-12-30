import React, { Component } from 'react';

class ToDoTask extends Component {
    constructor(props) {
        super(props);
        this.state = {
            checked: false,
            editing: false,
            input: this.props.value
        };

        this.input = React.createRef();

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
        this.input.current.focus();
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
        const readOnly = { readOnly: this.state.editing ? '' : 'readOnly'};
        let buttonSet;
        if (this.state.editing) {
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
                    <input
                        ref={this.input}
                        {...readOnly}
                        className={`todo-task__value ${checked}`}
                        type="text"
                        value={this.state.input}
                        onChange={this.handleChange}/>
                </div>
                {buttonSet}
            </li>
        );
    }
}

export default ToDoTask;
