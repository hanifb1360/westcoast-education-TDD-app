import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useContext } from 'react';
import Navbar from './components/navbar/Navbar';
import Home from './components/home/Home';
import CoursesList from './components/courses/CoursesList';
import Course from './components/courses/Course';
import TeacherList from './components/teachers/TeachersList';
import Teacher from './components/teachers/Teacher';
import Modal from './components/modal/Modal';
import Context from './context/Context';
import Admin from './components/admin/Admin';

function App() {
  const context = useContext(Context);

  return (
    <Router>
      <header>
        <Navbar />
      </header>
      <main>
        {context.modalStatus && <Modal />}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/courses" element={<CoursesList btn={true} />} />
          <Route path="/teachers" element={<TeacherList />} />
          <Route path="/courses/:id" element={<Course />} />
          <Route path="/teachers/:id" element={<Teacher />} />
          <Route path="/admin" element={<Admin />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
