import './css/CourseDetailsPage.css'
import { useLocation, useNavigate } from 'react-router-dom';
import SurfSmartImage from '../assets/SurfSmart.png';
import SkateparkStarterImage from '../assets/SkateparkStarter.png';
import SummerSnapsImage from '../assets/SummerSnaps.png';
import PicnicPrepImage from '../assets/PicnicPrep.png';

const courses = {
  SurfSmart: {
    title: 'Surf Smart: Beach Safety and Wave Basics',
    image: SurfSmartImage,
    imageAlt: 'A beginner surfer standing on the sand holding a surfboard with small waves in the background.',
    hours: 4,
    detailedDescription: 'This micro course introduces learners to safe beach behaviour during summer. It covers how to identify beach flags, understand surf conditions, recognise common hazards, and make safer decisions around waves, rips, tides, and weather. The course is designed for beginners who want to feel more confident at the beach before swimming, surfing, or bodyboarding.',
    modules: [
      'Understanding beach flags and patrol areas',
      'Identifying rips, currents, and wave conditions',
      'Checking weather, tides, and surf reports',
      'Basic surf etiquette and water awareness',
      'What to do in an emergency',
      'Final beach safety checklist',
    ],
  },
  SkateparkStarter: {
    title: 'Skatepark Starter: Skateboarding Basics',
    image: SkateparkStarterImage,
    imageAlt: 'A skateboard resting on concrete near a sunny skatepark with ramps in the background.',
    hours: 5,
    detailedDescription: 'This micro course is for beginners who want to start skateboarding safely. Learners explore essential equipment, protective gear, basic stance, balance, pushing, stopping, and turning. The course also introduces common skatepark rules so learners understand how to share space with other skaters, scooter riders, and BMX riders.',
    modules: [
      'Choosing a skateboard and safety gear',
      'Finding your stance and balance',
      'Pushing, rolling, and stopping',
      'Basic turns and controlled movement',
      'Skatepark etiquette and shared spaces',
      'Beginner practice routine',
    ],
  },
  SummerSnaps: {
    title: 'Summer Snaps: Phone Photography Outdoors',
    image: SummerSnapsImage,
    imageAlt: 'A phone taking a photo of a beach sunset with palm trees and people in silhouette.',
    hours: 3,
    detailedDescription: 'This micro course teaches learners how to take better summer photos using a smartphone. It focuses on practical techniques such as lighting, framing, angles, action shots, reflections, and editing. Learners will create a small summer photo collection suitable for social media, a personal portfolio, or a class project.',
    modules: [
      'Understanding natural light',
      'Framing beach, park, and action shots',
      'Taking clear movement photos',
      'Using reflections, shadows, and colour',
      'Simple editing on a phone',
      'Creating a mini summer photo collection',
    ],
  },
  PicnicPrep: {
    title: 'Picnic Prep: Easy Summer Food and Outdoor Planning',
    image: PicnicPrepImage,
    imageAlt: 'A picnic basket, cold drinks, fruit, and sandwiches set up on a picnic rug near the beach.',
    hours: 4,
    detailedDescription: 'This micro course helps learners plan a practical summer picnic or beach day. It includes choosing easy foods, keeping food safe in warm weather, packing essentials, planning around weather, managing rubbish, and creating a simple budget. Learners finish with a complete picnic plan they could use for friends, family, or a small group activity.',
    modules: [
      'Choosing summer-friendly food and drinks',
      'Food safety in hot weather',
      'Packing a picnic bag or cooler',
      'Planning for sun, wind, and weather',
      'Budgeting for a group picnic',
      'Creating a complete picnic plan',
    ],
  },
};

function CourseDetailsPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const courseId = new URLSearchParams(location.search).get('button');
  const course = courses[courseId];

  if (!course) {
    return (
      <div className="container">
        <p>Course not found.</p>
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
          src={course.image}
          alt={course.imageAlt}
        />

        <p className="course-detail-hours">⏱ {course.hours} hours to complete</p>

        <p className="course-detail-description">{course.detailedDescription}</p>

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