const Teacher = require('../models/teacher.model');

module.exports.createTeacher = async ({name, email}) => {
  let object = {name, email};
  return await Teacher.create(object);
};

module.exports.deleteTeacher = async (id) => {
  return await Teacher.deleteOne({id});
};

module.exports.editTeacher = async (id, update) => {
  return await Teacher.findByIdAndUpdate({id}, update);
};

module.exports.getTeachers = async (query) => {
  return await Teacher.find(query);
};

module.exports.getTeacherById = async (id) => {
  return await Teacher.findById(id);
};