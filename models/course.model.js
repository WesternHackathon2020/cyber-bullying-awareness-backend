const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CourseSchema = new Schema({
    uuid: {type: String, unique: true},
    teacherName: {type: mongoose.Schema.ObjectId, ref: ('Teacher'), required: true},
    className: String,
    email: String,
});

module.exports = mongoose.model('Course', CourseSchema);