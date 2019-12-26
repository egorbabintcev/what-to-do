import React, { Component } from 'react';

class ToDoInput extends Component {
    constructor(props) {
        super(props);
        this.state = {
            input: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        this.setState({ input: e.target.value });
    }

    handleSubmit(e) {
        const id = `f${(~~(Math.random()*1e8)).toString(16)}`
        const content = this.state.input.trim();
        e.preventDefault();
        this.props.addTask({ id, content });
    }

    render() {
        return (
            <div className="todo-input">
                <form className="todo-input__form" onSubmit={this.handleSubmit}>
                    <input
                     type="text"
                     className="todo-input__field"
                     placeholder="Type here your task here"
                     onChange={this.handleChange}/>
                    <button type="submit" className="todo-input__button">add</button>
                </form>
            </div>
        );
    }
}

export default ToDoInput;
