import React from 'react';
import { connect } from 'react-redux'

import ToDoTask from './ToDoTask'
import ToDoTaskAdd from './ToDoTaskAdd';


class ToDoList extends React.Component {
  render() {
    console.log(this.props.todos);
    
    if (this.props === undefined || this.props.todos === undefined) {
      return null;
    }

    return (
                  <div>
                    <ToDoTaskAdd />

                    <div className="todo-list">
                    {
                      this.props.todos.map(function(task) {
                        return (
                          <ToDoTask key={task._id} task_object={task} />
                        )
                      })
                    }
                    </div>
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

