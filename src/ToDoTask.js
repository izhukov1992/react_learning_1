import React from 'react';

import './ToDoTask.css'


class ToDoTask extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      _id: props.task_object._id,
      task_name: props.task_object.task_name,
      done: props.task_object.done,
      prompt: props.task_object.prompt,
      show_prompt: false
    };

    this.onTaskClick = this.onTaskClick.bind(this);
    this.onTaskFocus = this.onTaskFocus.bind(this);
    this.onTaskFocusOut = this.onTaskFocusOut.bind(this);
  }

  onTaskClick() {
    fetch(`/tasks/${this.state._id}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        done: this.state.done
      })
    })
    .then(res => res.json())
    .then(data => {
      this.setState({
        done: !this.state.done
      })
    })
  }

  onTaskFocus() {
    this.setState({
      show_prompt: true
    })
  }

  onTaskFocusOut() {
    this.setState({
      show_prompt: false
    })
  }

  render() {
    let icon = '❌';

    if (this.state.done) {
        icon = '✅';
    }

    return (
    
        <div className={`task ${this.props.type}`}
             onClick={this.onTaskClick}
             onMouseOver={this.onTaskFocus}
             onMouseOut={this.onTaskFocusOut}
        >
          <div className="desc">
            <div className="title">{this.state.task_name}</div>
            <div className="prompt">{this.state.show_prompt && <span>{this.state.prompt}</span>}</div>
          </div>
          <div className="time">
            <div className="date"><span>{icon}</span></div>
          </div>

        </div>
        
    
    );
  }
}

export default ToDoTask;
