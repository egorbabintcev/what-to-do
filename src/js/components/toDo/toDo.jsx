import React, { Component } from 'react';
import ToDoInput from './toDoInput.jsx';
import ToDoTasklist from './toDoTasklist.jsx';

const tasks = [
    'Do the right things',
    'Call to mom'
]

class ToDo extends Component {
    render() {
        return (
            <div className="todo">
                <ToDoInput />
                <ToDoTasklist tasks={tasks}/>
            </div>
        );
    }
}

export default ToDo;
