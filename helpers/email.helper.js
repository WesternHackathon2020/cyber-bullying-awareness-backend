require('dotenv').config()
const nodeMailer = require('nodemailer')
const EMAIL = process.env.EMAIL
const EMAIL_PASSWORD = process.env.EMAIL_PASSWORD
const HOST = process.env.HOST

exports.sendEmail = async (course, teacher, hasFlaggedMessages) => {
    const transporter = nodeMailer.createTransport({
        host: 'smtp.gmail.com',
        port: '465',
        secure: true,
        protocol: 'ssl',
        auth: {
            user: EMAIL,
            pass: EMAIL_PASSWORD
        }
    })

    const message = hasFlaggedMessages ? `Hello ${teacher.name}, CBD has flagged possible 
    occurrences of bullying in your class ${course.className}. Please visit ${HOST}/${course.uuid} to review these messages.`
        : `Hello ${teacher.name}! Your class ${course.className} has no flagged messages today.`

    const mailOptions = {
        from: EMAIL,
        to: teacher.email,
        subject: `Cyber Bullying Detection Report`,
        text: message
    }

    try {
        await transporter.sendMail(mailOptions)
        return true
    } catch (error) {
        console.log(error)
        return false
    }
}