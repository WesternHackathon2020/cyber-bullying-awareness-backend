const Class = require('../models/flagged.model');

module.exports.flagContent = async ({uuid, teacherName, className}) => {
  let object = {uuid, teacherName, className};
  return await Class.create(object);
};

module.exports.deleteClass = async (uuid) => {
  return await Class.deleteOne({uuid});
};

module.exports.editClass = async (uuid, update) => {
  return await Class.findByIdAndUpdate({uuid}, update);
};

module.exports.getAllClasses = async (query) => {
  return await Class.find(query);
};

module.exports.getClassByUUId = async (uuid) => {
  return await Class.findOne({uuid});
};