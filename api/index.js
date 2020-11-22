const express = require('express');
const api = express.Router();

// Middleware
// Api routes.

// TEST
api.get("/api/", (req, res)=>res.send("Cyber Bully Detector (CBD)"));

// Course
const classController = require("./controllers/course.controller");
const studentController = require("./controllers/student.controller");

api.get("/api/class/getCourses", classController.getCourses);
api.get("/api/class/getCourseByUUId/:uuid", classController.getCourseByUUId);
api.get("/api/class/getStudentsInCourse/:uuid", classController.getStudentsInCourse);
api.get('/api/class/getFlaggedContentByCourseId/:id', studentController.getFlaggedContentByCourseId);
api.get('/api/class/allFlagged', classController.getAllFlagged);
api.get("/api/class/getCoursesForTeacher/:id",classController.getTeachersCourses);
api.get('/api/flagged/:id', studentController.getFlaggedContentByCourseId)

// Students
api.get("/api/students/", studentController.getStudents);
api.get("/api/students/:id", studentController.getStudentsByUUId);
api.get('/api/students/flagged/:id', studentController.getFlaggedContentByStudentId)

// Teacher
const teacherController = require('./controllers/teacher.controller');
api.get('/api/teachers/', teacherController.getTeachers);
api.get("/api/teachers/:id", teacherController.getTeachersById);

const analyticsController = require('./controllers/analytics.controller');
api.get('/api/process/:uuid', analyticsController.processClass);

const generateController = require('./controllers/generate.controller');
api.get('/admin/generate/data', generateController.generate)

module.exports = api;