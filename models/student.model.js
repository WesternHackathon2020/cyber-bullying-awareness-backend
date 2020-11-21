const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const StudentSchema = new Schema({
    uuid: {type: String, unique: true},
    flaggedCount: {type: Number, default: 0},
    classId: {type: mongoose.Schema.ObjectId, ref: ('Class'), required: true},
    name: String,
});

module.exports = mongoose.model('Student', StudentSchema);