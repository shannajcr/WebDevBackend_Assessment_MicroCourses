Component 1 React - hardcoded course cards - hardcoded details page based on which course was chosen.

Component 2 Back end:
-  Created an Express server with 5 REST API routes (GET all, GET by ID, POST, PUT, DELETE)
-  created a MongoDB Atlas collection
-  grabbed the MongoDB link and added it to the .env file
-  then could send CRUD ops using Postman, POST GET UPDATE DELETE

Component 3 Front & Backend working together5: 
- CoursesPage.jsx — instead of hardcoded cards, fetch all courses from your API
- CourseDetailsPage.jsx — instead of a hardcoded data object, fetch one course by ID from your API
- Install axios in Component_1 (axios is a JavaScript library) it helps send HTTP requests from the frontend to a backend API.



Running Component 3

You need two terminals running at the same time, one for the backend, one for the frontend.

Terminal 1 - start the backend:
cd Component_3\microcourses-backend
node server.js

Terminal 2 - start the frontend:
cd Component_3\microcourses-frontend
npm run dev

Then open http://localhost:5173 in your browser and your course cards should load from the database.
