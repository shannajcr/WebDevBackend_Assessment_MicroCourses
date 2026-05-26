import { useState, useEffect } from 'react'
//adding in axios
import axios from 'axios';
import './css/CoursesPage.css'
import { useNavigate } from 'react-router-dom';
import SurfSmartImage from '../assets/SurfSmart.png';
import SkateparkStarterImage from '../assets/SkateparkStarter.png';
import SummerSnapsImage from '../assets/SummerSnaps.png';
import PicnicPrepImage from '../assets/PicnicPrep.png';


const mappingImgs = {
  'Surf Smart': SurfSmartImage,
  'Skatepark Starter': SkateparkStarterImage,
  'Summer Snaps': SummerSnapsImage,
  'Picnic Prep': PicnicPrepImage,
};

function getImage(title) {
  for (const key of Object.keys(mappingImgs)) {
    if (title.includes(key)) return mappingImgs[key];
  }
  return null;
}

function CoursesPage() {
  const navigate = useNavigate();

  // using axios to retrieve course details
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await axios.get('http://localhost:3000/courses');
        setCourses(response.data);
      } catch (error) {
        console.error('Error fetching courses:', error);
      }
    };
    fetchCourses();
  }, []);

  const handleButtonClick = (identifier) => {
    navigate(`/main?button=${identifier}`);
  };

  return (
    <div>
      <div className='app-header'>MicroCourses</div>
      <fieldset className="courses-container card">
        <legend className="courses-title">Courses</legend>

        <div className="summer-header">SUMMER COURSES</div>
        <div className="courses-header">
          Click on a course button to continue.
        </div>
        {/* I updated this from manually adding the cards to using axios to fetch data from MongoDB and split it by a colon using the first value. */}
        <div className="courses-grid">
          {courses.map((course) => (
            <div className="course-card" key={course._id}>
              <div className="app-courseheader">{course.title.split(':')[0]}</div>
              <img
                className="course-image"
                src={getImage(course.title)}
                alt={course.title}
              />
              <p>{course.title.split(':')[1]?.trim()}</p>
              <p>⏱ {course.hours} hours</p>
              <p className="dark-p">{course.description}</p>
              <button
                className="btn btn-primary app-button-hover-effect"
                onClick={() => handleButtonClick(course._id)}
              >
                {course.title.split(':')[0]}
              </button>
            </div>
          ))}
        </div>
      </fieldset>
    </div>
  );
}

export default CoursesPage;