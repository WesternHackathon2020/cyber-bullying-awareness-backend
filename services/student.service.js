const Student = require('../models/student.model');
//     uuid: {type: String, unique: true},
//     flaggedCount: {type: Number, default: 0},
//     name: String,
//     classId

module.exports.createStudent = async ({uuid, flaggedCount, name, classId}) => {
  let object = {uuid, flaggedCount, name, classId};
  return await Student.create(object);
};

module.exports.deleteStudent = async (uuid) => {
  return await Student.deleteOne({uuid});
};

module.exports.editStudent = async (uuid, update) => {
  return await Student.findByIdAndUpdate({uuid}, update);
};

module.exports.getStudents = async (query) => {
  return await Student.find(query);
};

module.exports.getStudentByUUId = async (uuid) => {
  return await Student.findOne({uuid});
};