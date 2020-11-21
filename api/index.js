const express = require('express');
const api = express.Router();

// Middleware
// Api routes.

// TEST
api.get("/api/", (req, res)=>res.send("Cyber Bully Detector (CBD)"));

// Course
const classController = require("./controllers/course.controller");
api.get("/api/class/getCoursees", classController.getCoursees);
api.get("/api/class/getCourseByUUId/:uuid", classController.getCourseByUUId);
api.get("/api/class/getStudentsInCourse/:uuid", classController.getStudentsInCourse);
api.get("/api/class/getFlaggedContentByUUId/:uuid", classController.getFlaggedContentByUUId);

// Students
const studentController = require("./controllers/student.controller");
api.get("/api/students/", studentController.getStudents);
api.get("/api/students/:uuid", studentController.getStudentsByUUId);

module.exports = api;