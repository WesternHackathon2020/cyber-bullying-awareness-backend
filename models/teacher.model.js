const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TeacherSchema = new Schema({
    email: String,
    name: String,
});

module.exports = mongoose.model('Teacher', TeacherSchema);