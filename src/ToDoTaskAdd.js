import React from 'react';


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
  

  onFormSubmit(e) {
    e.preventDefault();

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
      console.log(data);
      this.props.addTask(data);
    })

    console.log(this.state.task_name + ' : ' + this.state.prompt);
  }

  render() {
    return (
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
    );
  }
}

export default ToDoTaskAdd;
