const Student = require('../models/student.model');
const Flagged = require('../models/flagged.model');
const Course = require('../models/course.model');

/*
flaggedMap : {
    "username" : [
        {
            SENDER,
            TO,
            TIMESTAMP,
            ORIGINAL_MESSAGE,
            TYPE
        }
    ]
}
 */

const insertMessages = async (course, username, messages) => {
    const student = await Student.findOne({name: username})

    student.flaggedCount += messages.size

    for(const message of Array.from(messages)){
        await Flagged.create({
            type: message.TYPE,
            courseId: course.id,
            studentId: student.id,
            studentName : username,
            contentText: message.ORIGINAL_MESSAGE,
            timeSubmitted: message.TIMESTAMP,
            roomRecorded: message.ROOM_RECORDED,
            messageTo: message.TO
        })
    }

    await student.save()
}


module.exports.addFlaggedItems = async (course, flaggedMap) => {
    for(const username in flaggedMap){
        const messages = flaggedMap[username]
        await insertMessages(course, username, messages)
    }
};