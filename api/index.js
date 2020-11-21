const express = require('express');
const api = express.Router();

// Middleware
// Api routes.

// TEST
api.get("/api/", (req, res)=>res.send("Cyber Bully Detector (CBD)"));

// Class
const classController = require("./controllers/class.controller");
api.get("/api/class/getClasses", classController.getClasses);
api.get("/api/class/getClassByUUId/:uuid", classController.getClassByUUId);
api.get("/api/class/getStudentsInClass/:uuid", classController.getStudentsInClass);
api.get("/api/class/getFlaggedContentByUUId/:uuid", classController.getFlaggedContentByUUId);

// Students
const studentController = require("./controllers/student.controller");
api.get("/api/students/", studentController.getStudents);
api.get("/api/students/:uuid", studentController.getStudentsByUUId);

module.exports = api;