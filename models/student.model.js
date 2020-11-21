const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const StudentSchema = new Schema({
    uuid: String,
    flaggedCount: {type: Number, default: 0},
    name: String,
    classId: {type: mongoose.Schema.ObjectId, ref: ('Class'), required: true},
});

module.exports = mongoose.model('Student', StudentSchema);