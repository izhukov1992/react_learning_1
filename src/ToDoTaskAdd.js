import React from 'react';
import { Link, useNavigate } from "react-router-dom";
import { connect } from 'react-redux'

import { addTodo } from './actions'


class ToDoTaskAdd extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      task_name: '',
      prompt: ''
    };

    this.onFormSubmit = this.onFormSubmit.bind(this);
    this.onTaskNameChange = this.onTaskNameChange.bind(this);
    this.onPromptChange = this.onPromptChange.bind(this);
    this.backToList = this.backToList.bind(this);
  }

  onTaskNameChange(e) {
    this.setState({
      task_name: e.target.value
    });
  }

  onPromptChange(e) {
    this.setState({
      prompt: e.target.value
    });
  }

  backToList() {
    this.props.history('/');
  }

  onFormSubmit(e) {
    e.preventDefault();

    let dispatch = this.props.dispatch;

    fetch('/tasks/add', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        task_name: this.state.task_name,
        prompt: this.state.prompt
      })
    })
    .then(res => res.json())
    .then(data => {

      dispatch(addTodo(data.task_name, data.prompt, data._id));
      this.backToList();

    })

    console.log(this.state.task_name + ' : ' + this.state.prompt);
  }

  render() {
    return (
      <div>
        <form onSubmit={this.onFormSubmit}>
          <input name="task"
                 type="text"
                 placeholder="Что нужно сделать"
                 value={this.state.task_name}
                 onChange={this.onTaskNameChange} />
          <input name="prompt"
                 type="text"
                 placeholder="Подсказка"
                 value={this.state.prompt}
                 onChange={this.onPromptChange} />
          <button>Добавить задачу</button>
        </form>
        <Link to='/'>Вернуться к списку</Link>
      </div>
    );
  }
}

function ToDoTaskAddWrapper(props) {
  return (
    <ToDoTaskAdd {...props} history={useNavigate()} />
  )
}

export default connect()(ToDoTaskAddWrapper);
