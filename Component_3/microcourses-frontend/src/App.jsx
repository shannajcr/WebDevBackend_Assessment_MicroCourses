import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CoursesPage from './components/CoursesPage.jsx';
import CourseDetailsPage from './components/CourseDetailsPage.jsx';

function App() {
  console.log('App is rendering');
  return (
    <Router>
      <Routes>
        <Route path="/" element={<CoursesPage />} />
        <Route path="/main" element={<CourseDetailsPage />} />
      </Routes>
    </Router>
  );
}

export default App;