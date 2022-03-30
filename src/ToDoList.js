import React from 'react';
import { Link } from "react-router-dom";
import ToDoTask from './ToDoTask'
//import ToDoTaskAdd from './ToDoTaskAdd'

class ToDoList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      tasks: []
    };

    //this.addTask = this.addTask.bind(this);
  }

  /*addTask(task) {
    this.setState({
      tasks: [...this.state.tasks, task]
    })
  }*/

  componentDidMount() {
    fetch('/tasks').then(res => res.json()).then(data => {
      this.setState({
        tasks: data
      })
    })
  }

  render() {
    console.log(this.state.tasks);

    let done = this.state.tasks.filter(function(task) {
      return task.done === true;
    });

    let not_done = this.state.tasks.filter(function(task) {
      return task.done === false;
    });

    return (
    
    
      <div className="task-list">
        <Link to='/add'>Добавить задачу</Link>
        <h1>Tasks</h1>
        <div className="priority low"><span>Done</span></div>
        {
          not_done.map(function(task) {
            return (
              <ToDoTask key={task._id} task_object={task} type={'low'} />
            )
          })
        }
        <div className="priority high"><span>Not done</span></div>
        {
          done.map(function(task) {
            return (
              <ToDoTask key={task._id} task_object={task} type={'high'} />
            )
          })
        }
      </div>
        
    );
  }
}

export default ToDoList;
