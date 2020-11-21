const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const FlaggedSchema = new Schema({
    username : String,
    timeSubmitted : Date,
    type: {type: String, enum: ["AUDIO", "TEXT"], default: "TEXT"},
    value: String,
    classId: {type: mongoose.Schema.ObjectId, ref: ('Class'), required: true},
    roomRecorded: String,
});

module.exports = mongoose.model('Flagged', FlaggedSchema);