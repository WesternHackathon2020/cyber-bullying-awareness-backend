const Course = require('../models/course.model');

module.exports.createCourse = async ({uuid, teacherId, className}) => {
  let object = {uuid, teacherId, className};
  return await Course.create(object);
};

module.exports.deleteCourse = async (uuid) => {
  return await Course.deleteOne({uuid});
};

module.exports.editCourse = async (uuid, update) => {
  return await Course.findByIdAndUpdate({uuid}, update);
};

module.exports.getAllCourses = async (query) => {
  return await Course.find(query);
};

module.exports.getCourseByUUId = async (uuid) => {
  return await Course.findOne({uuid});
};