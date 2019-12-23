import React, { Component } from 'react';

class ToDoInput extends Component {
    render() {
        return (
            <div className="todo-input">
                <form>
                    <input type="text" className="todo-input__field" placeholder="Type here your task here"/>
                    <button type="submit" className="todo-input__button">add</button>
                </form>
            </div>
        );
    }
}

export default ToDoInput;
