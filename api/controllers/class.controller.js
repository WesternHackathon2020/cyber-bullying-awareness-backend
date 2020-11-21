const classService = require("../../services/class.service");
const studentService = require("../../services/student.service");
const flaggedService = require("../../services/flagged.service");

module.exports.getClasses = async (req, res, next) => {

	try {
		return res.json(await classService.getAllClasses(req.query));
	}
	catch(error){
		console.error(error);
		return res.sendStatus(400).send(error);
	}
}

module.exports.getClassByUUId = async (req, res, next) => {
	try {
		const object = await classService.getClassByUUId(req.params.uuid);
		return res.json(object);
	}
	catch(error){
		console.error(error);
		return res.sendStatus(400).send(error);
	}
}

module.exports.getStudentsInClass = async (req, res, next) => {
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
		const flaggedContent = await flaggedService.getFlaggedByClassUUId(req.params.uuid);
		return res.json(flaggedContent);
	}
	catch(error){
		console.error(error);
		return res.sendStatus(400).send(error);
	}
}