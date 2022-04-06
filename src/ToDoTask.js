import React from 'react';
import { connect } from 'react-redux'

import { toggleTodo } from './actions'
import './ToDoTask.css'


class ToDoTask extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      show_prompt: false
    };

    this.onTaskClick = this.onTaskClick.bind(this);
    this.onTaskFocus = this.onTaskFocus.bind(this);
    this.onTaskFocusOut = this.onTaskFocusOut.bind(this);
  }

  onTaskClick() {
    let dispatch = this.props.dispatch;

    fetch(`/tasks/${this.props.task_object._id}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        done: this.props.task_object.done
      })
    })
    .then(res => res.json())
    .then(data => {

      dispatch(toggleTodo(this.props.task_object._id));

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

    if (this.props.task_object.done) {
        icon = '✅';
    }

    return (
    
        <div className={`task ${this.props.type}`}
             onClick={this.onTaskClick}
             onMouseOver={this.onTaskFocus}
             onMouseOut={this.onTaskFocusOut}
        >
          <div className="desc">
            <div className="title">{this.props.task_object.task_name}</div>
            <div className="prompt">{this.state.show_prompt && <span>{this.props.task_object.prompt}</span>}</div>
          </div>
          <div className="time">
            <div className="date"><span>{icon}</span></div>
          </div>

        </div>
        
    
    );
  }
}

export default connect()(ToDoTask);
