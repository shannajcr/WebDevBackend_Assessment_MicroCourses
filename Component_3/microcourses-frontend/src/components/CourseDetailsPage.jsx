import './css/CourseDetailsPage.css'
import { useLocation, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
//Adding in axios
import axios from 'axios';
import SurfSmartImage from '../assets/SurfSmart.png';
import SkateparkStarterImage from '../assets/SkateparkStarter.png';
import SummerSnapsImage from '../assets/SummerSnaps.png';
import PicnicPrepImage from '../assets/PicnicPrep.png';

// A more efficient way to find the correct images
const mappingImgs = {
  'Surf Smart': SurfSmartImage,
  'Skatepark Starter': SkateparkStarterImage,
  'Summer Snaps': SummerSnapsImage,
  'Picnic Prep': PicnicPrepImage,
};

function getImage(title) {
  for (const key of Object.keys(mappingImgs)) {
    if (title && title.includes(key)) return mappingImgs[key];
  }
  return null;
}

function CourseDetailsPage() {
  const location = useLocation();
  const navigate = useNavigate();
  // using axios to fetch courtse data from MongoDB
  const courseId = new URLSearchParams(location.search).get('button');
  const [course, setCourse] = useState(null);

  useEffect(() => {
    const fetchCourse = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/courses/${courseId}`);
        setCourse(response.data);
      } catch (error) {
        console.error('Error fetching course:', error);
      }
    };
    if (courseId) {
      fetchCourse();
    }
  }, [courseId]);

  if (!course) {
    return (
      <div className="container">
        <p>Loading courses...</p>
        <button className="btn btn-primary" onClick={() => navigate('/')}>Back to Courses</button>
      </div>
    );
  }

  return (
    <div className="container">

      <button className="btn btn-primary app-button-hover-effect back-btn" onClick={() => navigate('/')}>
        ← Back to Courses
      </button>

      <div className="course-detail">

        <h1 className="course-detail-title">{course.title}</h1>

        <img
          className="course-detail-image"
          src={getImage(course.title)}
          alt={course.title}
        />

        <p className="course-detail-hours">⏱ {course.hours} hours to complete</p>

        <p className="course-detail-description">{course.description}</p>

        <div className="course-modules">
          <h2>Modules</h2>
          <ol>
            {course.modules.map((module, index) => (
              <li key={index}>{module}</li>
            ))}
          </ol>
        </div>

        <button className="btn btn-primary app-button-hover-effect enrol-btn">
          Enrol Now
        </button>

      </div>
    </div>
  );
}

export default CourseDetailsPage;