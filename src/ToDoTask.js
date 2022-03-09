import React from 'react';

import './ToDoTask.css'


class ToDoTask extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      task_name: props.task_object.task_name,
      done: props.task_object.done,
      prompt: ''
    };

    this.onTaskClick = this.onTaskClick.bind(this);
    this.onTaskFocus = this.onTaskFocus.bind(this);
    this.onTaskFocusOut = this.onTaskFocusOut.bind(this);
  }

  onTaskClick() {
    this.setState({
      done: !this.state.done
    })
  }

  onTaskFocus() {
    this.setState({
      prompt: 'Клик для изменения состояния'
    })
  }

  onTaskFocusOut() {
    this.setState({
      prompt: ''
    })
  }

  render() {
    let icon = '❌';

    if (this.state.done) {
        icon = '✅';
    }

    return (
    <div className="row"
         onClick={this.onTaskClick}
         onMouseOver={this.onTaskFocus}
         onMouseOut={this.onTaskFocusOut}>

      <div className="col-sm-12 col-lg-6">{this.state.task_name}</div>
      <div className="col-sm-12 col-lg-1"><span>{icon}</span></div>
      <div className="col-sm-12 col-lg-5"><span className="badge bg-info">{this.state.prompt}</span></div>

    </div>
    );
  }
}

export default ToDoTask;
