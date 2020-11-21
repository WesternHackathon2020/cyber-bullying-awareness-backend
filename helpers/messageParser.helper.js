const csv = require('csv-parser')
const fs = require('fs')

const csvArrayToMap = (array) => {
    const senderMap = {}
    for(let i = 0; i < array.length; i++){
        let message = array[i]
        const originalMessage = message.MESSAGE
        message.MESSAGE = message.MESSAGE.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"")
        message.MESSAGE += '.'
        senderMap[i] = array[i]
        senderMap[i].ORIGINAL_MESSAGE = originalMessage
    }
    return senderMap
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

exports.csvToMap = async (filename) => {

    const results = [];

    return new Promise((resolve, reject) => {
        fs.createReadStream(`../cyber-bullying-awareness-backend/temp/${filename}`)
            .pipe(csv())
            .on('data', (data) => results.push(data))
            .on('end', async () => {
                resolve(await csvArrayToMap(results))
            })
            .on('error', () => {
                reject()
            });
    });
}