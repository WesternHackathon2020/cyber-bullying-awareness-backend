const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ClassSchema = new Schema({
    uuid: {type: String, unique: true},
    teacherName: String,
    className: String,
});

module.exports = mongoose.model('Class', ClassSchema);