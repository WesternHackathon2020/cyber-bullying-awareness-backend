const path = require('path');
const {Storage} = require('@google-cloud/storage');
const language = require('@google-cloud/language');
const {downloadFile} = require('../helpers/file_manager.helper');


const analyzeCourse = async (courseUuid) => {
    const storage = new Storage();
    const client = new language.LanguageServiceClient();
    const destFilename = path.join(__dirname, '../temp/', courseUuid.concat('.csv'))

    await downloadDumpedFiles(storage, courseUuid, destFilename)
    //process csv


    return analyzeMessages(client, messageMap)
}

const downloadDumpedFiles = async (storage, courseUuid, destFilename) => {
    let srcFilename = 'RAW/'.concat(courseUuid).concat('/1605933923/PLAIN_TEXT.csv')

    await downloadFile(storage, srcFilename, destFilename)
}

const analyzeMessages = async (client, messageMap) => {
    let message = ''

    for (const key in messageMap) {
        message += messageMap[key].MESSAGE.concat(" ").replace(/"/g, "")
    }
    message = message.trim()
    const document = {
        content: message,
        type: 'PLAIN_TEXT',
    };

    // Detects the sentiment of the document
    const [result] = await client.analyzeSentiment({document});
    const sentences = result.sentences

    const flaggedMessageMap = {}
    for (let i = 0; i < sentences.length; i++) {
        const sentence = sentences[i]
        if (sentence.sentiment.score < 0) {
            const originalMessage = messageMap[i]
            flaggedMessageMap[originalMessage.SENDER] = (flaggedMessageMap[originalMessage.SENDER] || new Set()).add(originalMessage)
        }
    }
    return flaggedMessageMap
}