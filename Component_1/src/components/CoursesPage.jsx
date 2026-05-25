import { useState } from 'react'
import './css/CoursesPage.css'
import { useNavigate } from 'react-router-dom';
import SurfSmartImage from '../assets/SurfSmart.png';
import SkateparkStarterImage from '../assets/SkateparkStarter.png';
import SummerSnapsImage from '../assets/SummerSnaps.png';
import PicnicPrepImage from '../assets/PicnicPrep.png';

function CoursesPage() {
  const navigate = useNavigate();

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

        <div className="courses-grid">

          {/* Surf Smart */}
          <div className="course-card">
            <div className="app-courseheader">Surf Smart</div>
            <img 
              className="course-image"
              src={SurfSmartImage} 
              alt="A surfer looking out to the ocean and holding a surfboard."
            />
            <p>Beach Safety and Wave Basics</p>
            <p>⏱ 4 hours</p>
            <p className="dark-p">Learn the basics of beach safety, surf awareness, and how to read waves before entering the water.</p>
            <button 
              className="btn btn-primary app-button-hover-effect"
              onClick={() => handleButtonClick('SurfSmart')}
            >Surf Smart</button>
          </div>

          {/* Skatepark Starter */}
          <div className="course-card">
            <div className="app-courseheader">Skatepark Starter</div>
            <img 
              className="course-image"
              src={SkateparkStarterImage} 
              alt="A skateboard"
            />
            <p>Skateboarding Basics</p>
            <p>⏱ 5 hours</p>
            <p className="dark-p">Build confidence with beginner skateboarding skills, safety gear, balance, and skatepark etiquette.</p>
            <button 
              className="btn btn-primary app-button-hover-effect"
              onClick={() => handleButtonClick('SkateparkStarter')}
            >Skatepark Starter</button>
          </div>

          {/* Summer Snaps */}
          <div className="course-card">
            <div className="app-courseheader">Summer Snaps</div>
            <img 
              className="course-image"
              src={SummerSnapsImage} 
              alt="A smart phone taking an image of a beach sunset.Course image"
            />
            <p>Phone Photography Outdoors</p>
            <p>⏱ 3 hours</p>
            <p className="dark-p">Learn simple phone photography techniques for beaches, parks, summer events, and outdoor adventures.</p>
            <button 
              className="btn btn-primary app-button-hover-effect"
              onClick={() => handleButtonClick('SummerSnaps')}
            >Summer Snaps</button>
          </div>

          {/* Picnic Prep */}
          <div className="course-card">
            <div className="app-courseheader">Picnic Prep</div>
            <img 
              className="course-image"
              src={PicnicPrepImage} 
              alt="A picnic basket on a picnic rug with lemonade and fruits."
            />
            <p>Easy Summer Food and Outdoor Planning</p>
            <p>⏱ 4 hours</p>
            <p className="dark-p">Plan a simple summer picnic with safe food handling, packing tips, budgeting, and outdoor comfort.</p>
            <button 
              className="btn btn-primary app-button-hover-effect"
              onClick={() => handleButtonClick('PicnicPrep')}
            >Picnic Prep</button>
          </div>

        </div>
      </fieldset>
    </div>
  );
}

export default CoursesPage;