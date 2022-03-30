import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ToDoList from './ToDoList';
import ToDoTaskAdd from './ToDoTaskAdd';
import './bootstrap.min.css'
import './App.css'

function App() {
  return (
  <div className="container page-todo bootstrap snippets bootdeys">
    <div className="col-sm-7 tasks">

    <Router>
      <Routes>
        <Route path="/" element={<ToDoList />} />
        <Route path="/add" element={<ToDoTaskAdd />} />
      </Routes>
    </Router>

    </div>
  </div>
  );
}

export default App;
