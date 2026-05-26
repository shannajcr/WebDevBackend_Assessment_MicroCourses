import express, { json } from 'express';
import cors from 'cors'; // Import the cors package
import pkg from 'mongoose';
const { connect, connection, Schema, model, Types } = pkg;
import { config } from 'dotenv';
config();

const app = express();
app.use(cors());
const port = process.env.PORT || 3000;

app.use(json());

// MongoDB connection
connect(process.env.MONGODB_URI);

const db = connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
    console.log('Connected to MongoDB');
});

// Schemas and models
const courseSchema = new Schema({
 title: { type: String, required: true },
 description: { type: String },
 instructor: { type: String },
 category: { type: String },
 hours: { type: Number },
 modules: [{ type: String }],
});
const Course = model('Course', courseSchema);

// Retrieve all courses
app.get('/courses', async (req, res) => {
 try {
 const courses = await Course.find({});
 res.json(courses);
 } catch (error) {
 console.error(error);
 res.status(500).send('Error retrieving courses');
 }
});


// Retrieve a single course by course id
app.get('/courses/:id', async (req, res) => {
 try {
 const course = await Course.findById(req.params.id);
 if (!course) return res.status(404).send('Course not found');
 res.json(course);
 } catch (error) {
 console.error(error);
 res.status(500).send('Error retrieving course');
 }
});

// Create a new course using POST
app.post('/courses', async (req, res) => {
  try {
    const newCourse = new Course(req.body);
    await newCourse.save();
    console.log('Course created:', newCourse);
    res.status(201).json(newCourse);
  } catch (error) {
    console.error(error);
    res.status(400).send(error);
  }
});


// Update a course using a course ID
app.put('/courses/:id', async (req, res) => {
  try {
    const updatedCourse = await Course.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!updatedCourse) return res.status(404).send('Course not found');
    console.log('Course updated:', updatedCourse);
    res.json(updatedCourse);
  } catch (error) {
    console.error(error);
    res.status(400).send(error);
  }
});

// Remove a course by course ID
app.delete('/courses/:id', async (req, res) => {
  try {
    const deleted = await Course.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).send('Course not found');
    console.log('Course deleted:', deleted);
    res.status(204).send();
  } catch (error) {
    console.error(error);
    res.status(400).send(error);
  }
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});