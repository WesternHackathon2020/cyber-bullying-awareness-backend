const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ClassSchema = new Schema({
    uuid: String,
    teacherName: String,
    className: String,
});

module.exports = mongoose.model('Class', ClassSchema);