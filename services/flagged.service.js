const Flagged = require('../models/flagged.model');

module.exports.flagContent = async ({type, classId, studentId, studentName, text, roomRecorded, timeSubmitted}) => {
  let object = {uuid, flaggedCount, name, classId};
  return await Flagged.create(object);
};

module.exports.deleteFlag = async (uuid) => {
  return await Flagged.deleteOne({uuid});
};

module.exports.editFlagged = async (uuid, update) => {
  return await Flagged.findByIdAndUpdate({uuid}, update);
};

module.exports.getAllFlagged = async (query) => {
  return await Flagged.find(query);
};

module.exports.getFlaggedByClassUUId = async (uuid) => {
  return await Flagged.find({classId: uuid});
};

module.exports.getFlaggedById = async (id) => {
  return await Flagged.findById(id);
};