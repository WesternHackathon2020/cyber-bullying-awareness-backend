const teacherObject = require('../../generation/teacher.json')
const flaggedMessages = require('../../generation/flagged.json')
const students = require('../../generation/students.json')
const courses = require('../../generation/courses.json')
const teacherService = require('../../services/teacher.service')
const courseService = require('../../services/course.service')
const studentService = require('../../services/student.service')
const flaggedService = require('../../services/flagged.service')

module.exports.generate = async (req,res,next) => {
    try {
        //Generate teacher
        const teacher = await teacherService.createTeacher({name: teacherObject.name, email: teacherObject.email})

        if (!teacher) {
            console.log(error)
            return res.json({message: "Error"})
        }

        //Generate Courses
        const courseModels = []

        for (const course of courses) {
            courseModels.push(await courseService.createCourse({
                uuid: course.uuid,
                teacherId: teacher.id,
                className: course.className
            }))
        }

        //Generate Students each student gets 2 courses

        const studentModels = []

        for (const student of students) {
            let random = Math.floor(Math.random() * 3)
            let random2 = null
            if (random === 0) {
                random2 = 1
            } else if (random === 1) {
                random2 = 2
            } else {
                random2 = 0
            }
            studentModels.push(await studentService.createStudent({
                name: student.name,
                courseIds: [courseModels[random].id, courseModels[random2].id]
            }))
        }

        //Generate Flagged
        for (const flagged of flaggedMessages) {
            const student = studentModels.filter((student) => student.name === flagged.studentName)[0]
            console.log(student)
            let random = Math.floor(Math.random() * 2)
            await flaggedService.flagContent({
                studentId: student.id,
                studentName: student.name,
                courseId: student.courseIds[random],
                text: flagged.contentText,
                timeSubmitted: new Date(),
                roomRecorded: flagged.roomRecorded,
                messageTo: flagged.messageTo,
                type: flagged.type
            })
        }

        return res.json({message: "Data generated"})
    }catch(error){
        console.log(error)
        return res.status(400).json({message: "Error occured"})
    }
}