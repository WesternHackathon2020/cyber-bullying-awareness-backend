const Student = require('../models/student.model');

module.exports.createStudent = async ({name, courseId, flaggedCount}) => {
  let object = {flaggedCount: flaggedCount || 0, name, courseId};
  return await Student.create(object);
};

module.exports.deleteStudent = async (id) => {
  return await Student.deleteOne({id});
};

module.exports.editStudent = async (id, update) => {
  return await Student.findByIdAndUpdate({id}, update);
};

module.exports.getStudents = async (query) => {
  return await Student.find(query);
};

module.exports.getStudentById = async (id) => {
  return await Student.findOne({id});
};