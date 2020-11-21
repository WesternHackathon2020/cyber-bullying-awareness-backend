const Flagged = require('../models/flagged.model');

module.exports.flagContent = async ({name, courseId, studentId, studentName, text, roomRecorded, timeSubmitted, type}) => {
  let object = {name, courseId, studentId, studentName, text, roomRecorded, timeSubmitted, type};
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