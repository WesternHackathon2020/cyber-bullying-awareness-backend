const Flagged = require('../models/flagged.model');

module.exports.flagContent = async ({courseId, studentId, studentName, text, roomRecorded, timeSubmitted, type, messageTo}) => {
  let object = {courseId, studentId, studentName, contentText: text, roomRecorded, timeSubmitted, type, messageTo};
  return await Flagged.create(object);
};

module.exports.deleteFlag = async (id) => {
  return await Flagged.deleteOne({id});
};

module.exports.editFlagged = async (id, update) => {
  return await Flagged.findByIdAndUpdate({id}, update);
};

module.exports.getAllFlagged = async (query) => {
  return await Flagged.find(query);
};

module.exports.getFlaggedByCourseUUId = async (id) => {
  return await Flagged.find({courseId: id});
};

module.exports.getFlaggedById = async (id) => {
  return await Flagged.findById(id);
};

module.exports.getFlaggedByStudentId = async (studentId) => {
  return await Flagged.find({studentId: studentId})
}