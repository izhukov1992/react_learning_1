import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { Provider, connect } from 'react-redux';

import ToDoList from './ToDoList';
import { addTodoAll } from './actions';

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
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="card card-white">
              <div className="card-body">

                <Provider store={this.props.store}>

                  <Router>
                    <Routes>
                      <Route path="/" element={<ToDoList />} />
                    </Routes>
                  </Router>

                </Provider>

              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}


export default connect()(App);
