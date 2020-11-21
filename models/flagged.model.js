const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const FlaggedSchema = new Schema({
    type: {type: String, enum: ["AUDIO", "TEXT"], default: "TEXT"},
    courseId: {type: mongoose.Schema.ObjectId, ref: ('Course'), required: true},
    studentId: {type: mongoose.Schema.ObjectId, ref: ('Student'), required: true},
    studentName : {type: String, required: true},
    contentText: {type: String},
    timeSubmitted: {type: Date, default: Date.now},
    roomRecorded: {type: String},
    
});

module.exports = mongoose.model('Flagged', FlaggedSchema);