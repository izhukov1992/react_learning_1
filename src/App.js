import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ToDoList from './ToDoList';
import ToDoTaskAdd from './ToDoTaskAdd';
import './bootstrap.min.css'

function App() {
  return (
  <Router>
    <Routes>
      <Route path="/" element={<ToDoList />} />
      <Route path="/add" element={<ToDoTaskAdd />} />
    </Routes>
  </Router>
  );
}

export default App;
