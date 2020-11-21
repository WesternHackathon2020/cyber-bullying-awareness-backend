const express = require('express');
const api = express.Router();

// Middleware
// Api routes.

// TEST
api.get("/api/", (req, res)=>res.send("Cyber Bully Detector (CBD)"));

// Course
const classController = require("./controllers/course.controller");
api.get("/api/class/getCourses", classController.getCourses);
api.get("/api/class/getCourseByUUId/:uuid", classController.getCourseByUUId);
api.get("/api/class/getStudentsInCourse/:uuid", classController.getStudentsInCourse);
api.get("/api/class/getFlaggedContentByUUId/:uuid", classController.getFlaggedContentByUUId);
api.get("/api/class/getCoursesForTeacher/:uuid",classController.getTeachersCourses);

// Students
const studentController = require("./controllers/student.controller");
api.get("/api/students/", studentController.getStudents);
api.get("/api/students/:id", studentController.getStudentsByUUId);
api.get('/api/students/flagged/:id', studentController.getFlaggedContentByStudentId)
api.get('/api/flagged/:id', studentController.getFlaggedContentByCourseId)


const teacherController = require('./controllers/teacher.controller');
api.get('/api/teachers/', teacherController.getTeachers);
api.get("/api/teachers/:id", teacherController.getTeachersById);

const analyticsController = require('./controllers/analytics.controller');
api.get('/api/process/:uuid', analyticsController.processClass);

module.exports = api;