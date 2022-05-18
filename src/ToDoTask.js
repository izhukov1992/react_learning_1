import React from 'react';
import { connect } from 'react-redux'

import { toggleTodo } from './actions'


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
    let classname = "todo-item";
    let checked = false;

    if (this.props.task_object.done) {
      classname += " complete";
      checked = true;
    }

    return (
    
                        <div className={classname}
                             onClick={this.onTaskClick}
                             onMouseOver={this.onTaskFocus}
                             onMouseOut={this.onTaskFocusOut}
                        >
                            <div className="checker"><span className=""><input type="checkbox" checked={checked} readOnly={true} /></span></div>
                            <span>{this.props.task_object.task_name}</span>
                            {this.state.show_prompt && this.props.task_object.prompt !== "" && <span className="badge bg-warning text-dark"> {this.props.task_object.prompt}</span>}
                        </div>
        
    
    );
  }
}

export default connect()(ToDoTask);
