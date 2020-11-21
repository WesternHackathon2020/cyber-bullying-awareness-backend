const teacherService = require("../../services/teacher.service");

module.exports.getTeachers = async (req, res, next) => {

	try {
		return res.json(await teacherService.getTeachers(req.query));
	}
	catch(error){
		console.error(error);
		return res.sendStatus(400).send(error);
	}
}

module.exports.getTeachersById = async (req, res, next) => {
	try {
		const student = await teacherService.getTeacherById(req.params.uuid);
		return res.json(student);
	}
	catch(error){
		console.error(error);
		return res.sendStatus(400).send(error);
	}
}