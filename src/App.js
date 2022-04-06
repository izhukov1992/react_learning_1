import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { Provider, connect } from 'react-redux';

import ToDoList from './ToDoList';
import ToDoTaskAdd from './ToDoTaskAdd';
import { addTodoAll } from './actions'

import './bootstrap.min.css'
import './App.css'


class App extends React.Component {
  componentDidMount() {
    let dispatch = this.props.dispatch;

    fetch('/tasks').then(res => res.json()).then(data => {
      dispatch(addTodoAll(data));
    })
  }

  render() {
    return (
      <div className="container page-todo bootstrap snippets bootdeys">
        <div className="col-sm-7 tasks">

          <Provider store={this.props.store}>

            <Router>
              <Routes>
                <Route path="/" element={<ToDoList />} />
                <Route path="/add" element={<ToDoTaskAdd />} />
              </Routes>
            </Router>

          </Provider>

        </div>
      </div>
    )
  }
}


export default connect()(App);
