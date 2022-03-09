import React from 'react';
import ToDoTask from './ToDoTask'

class ToDoList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      tasks: []
    };
  }

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
      {
        this.state.tasks.map(function(task) {
          return (
            <ToDoTask key={task.id} task_object={task}/>
          )
        })
      }
      </div>
    );
  }
}

export default ToDoList;
