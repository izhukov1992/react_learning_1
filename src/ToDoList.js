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
    return (
      <div className="container">
      {/* <ToDoTaskAdd addTask={this.addTask} /> */}
      <Link to='/add'>Добавить задачу</Link>
      {
        this.state.tasks.map(function(task) {
          return (
            <ToDoTask key={task._id} task_object={task}/>
          )
        })
      }
      </div>
    );
  }
}

export default ToDoList;
