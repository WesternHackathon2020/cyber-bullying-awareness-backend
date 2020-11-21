const classService = require("../../services/class.service");
const studentService = require("../../services/student.service");

module.exports.getStudents = async (req, res, next) => {

	try {
		return res.json(await studentService.getStudents(req.query));
	}
	catch(error){
		console.error(error);
		return res.sendStatus(400).send(error);
	}
}

module.exports.getStudentsByUUId = async (req, res, next) => {
	try {
		const student = await studentService.getStudentByUUId(req.params.uuid);
		return res.json(student);
	}
	catch(error){
		console.error(error);
		return res.sendStatus(400).send(error);
	}
}