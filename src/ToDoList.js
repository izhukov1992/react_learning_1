import React from 'react';
import { Link } from "react-router-dom";
import { connect } from 'react-redux'

import ToDoTask from './ToDoTask'


class ToDoList extends React.Component {
  render() {
    console.log(this.props.todos);
    
    if (this.props === undefined || this.props.todos === undefined) {
      return null;
    }

    let done = this.props.todos.filter(function(task) {
      return task.done === true;
    });

    let not_done = this.props.todos.filter(function(task) {
      return task.done === false;
    });

    return (
    
      <div className="task-list">
        <Link to='/add'>Добавить задачу</Link>
        <h1>Tasks</h1>
        <div className="priority high"><span>Not done</span></div>
        {
          not_done.map(function(task) {
            return (
              <ToDoTask key={task._id} task_object={task} type={'high'} />
            )
          })
        }
        <div className="priority low"><span>Done</span></div>
        {
          done.map(function(task) {
            return (
              <ToDoTask key={task._id} task_object={task} type={'low'} />
            )
          })
        }
      </div>
        
    );
  }
}

function mapStateToProps(state) {
  return {
    todos: [...state.todos]
  }
}

export default connect(
  mapStateToProps
)(ToDoList);

