const classService = require("../../services/course.service");
const studentService = require("../../services/student.service");
const flaggedService = require("../../services/flagged.service");

module.exports.getCourses = async (req, res, next) => {
	try {
		return res.json(await classService.getAllCourses(req.query));
	}
	catch(error){
		console.error(error);
		return res.sendStatus(400).send(error);
	}
}

module.exports.getCourseByUUId = async (req, res, next) => {
	try {
		const object = await classService.getCourseByUUId(req.params.uuid);
		return res.json(object);
	}
	catch(error){
		console.error(error);
		return res.sendStatus(400).send(error);
	}
}

module.exports.getStudentsInCourse = async (req, res, next) => {
	try {
		const students = await studentService.getStudents({uuid: req.params.uuid});
		return res.json(students);
	}
	catch(error){
		console.error(error);
		return res.sendStatus(400).send(error);
	}
}

module.exports.getFlaggedContentByUUId = async (req, res, next) => {
	try {
		const flaggedContent = await flaggedService.getFlaggedByCourseUUId(req.params.uuid);
		return res.json(flaggedContent);
	}
	catch(error){
		console.error(error);
		return res.sendStatus(400).send(error);
	}
}