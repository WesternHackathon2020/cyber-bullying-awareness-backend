const analyticsService = require("../../services/analytics.service");
const emailHelper = require('../../helpers/email.helper');
const courseService = require('../../services/course.service');
const teacherService = require('../../services/teacher.service');
const {analyzeCourse} = require("../../sentiment_analysis/sentiment_analysis");

module.exports.processClass = async (req, res, next) => {
    try {
        //Process items
        const flaggedMap = await analyzeCourse(req.params.uuid)
        const course = await courseService.getCourseByUUId(req.params.uuid);
        const teacher = await teacherService.getTeacherById(course.teacherId);

        await analyticsService.addFlaggedItems(course, flaggedMap)

        if (await emailHelper.sendEmail(course, teacher, flaggedMap.length > 0)) {
            //Remove the items

            return res.json({message: "items processed successfully"})
        } else {
            return res.status(400).json({message: "error occurred please see logs."})
        }
    }catch(error){
        console.log(error)
        return res.status(400).json({message: "error occurred please see logs."})
    }
}