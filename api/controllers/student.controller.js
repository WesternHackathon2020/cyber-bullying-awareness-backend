const studentService = require("../../services/student.service");
const flaggedService = require("../../services/flagged.service");

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
		const student = await studentService.getStudentById(req.params.id);
		return res.json(student);
	}
	catch(error){
		console.error(error);
		return res.sendStatus(400).send(error);
	}
}

module.exports.getFlaggedContentByStudentId = async (req,res) => {
	try{
		const flagged = await flaggedService.getFlaggedByStudentId(req.params.id);
		return res.json(flagged);
	}catch(error){
		console.log(error);
		return res.status(400).json({message : error});
	}
}

module.exports.getFlaggedContentByCourseId = async (req,res) => {
	try{
		const flagged = await flaggedService.getFlaggedByCourseUUId(req.params.id);
		return res.json(flagged);
	}catch(error){
		console.log(error);
		return res.status(400).json({message : error});
	}
}