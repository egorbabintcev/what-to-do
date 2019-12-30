import React, { Component } from 'react';

class ToDoInput extends Component {
    constructor(props) {
        super(props);
        this.state = {
            input: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.textInput = React.createRef();
    }

    handleChange(e) {
        this.setState({ input: e.target.value });
    }

    handleSubmit(e) {
        e.preventDefault();
        const id = `f${(~~(Math.random()*1e8)).toString(16)}`
        const value = this.state.input.trim();
        this.textInput.current.value = '';
        this.props.addTask({ id, value });
    }

    render() {
        return (
            <div className="todo-input">
                <form className="todo-input__form" onSubmit={this.handleSubmit}>
                    <input
                        ref={this.textInput}
                        type="text"
                        className="todo-input__field"
                        placeholder="Type your task here"
                        onChange={this.handleChange}/>
                    <button type="submit" className="todo-input__button">add</button>
                </form>
            </div>
        );
    }
}

export default ToDoInput;
