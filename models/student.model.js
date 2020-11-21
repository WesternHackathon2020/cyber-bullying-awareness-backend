const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const StudentSchema = new Schema({
    flaggedCount: {type: Number, default: 0},
    courseIds: [{type: mongoose.Schema.ObjectId, ref: ('Course'), required: true}],
    name: String,
});

module.exports = mongoose.model('Student', StudentSchema);