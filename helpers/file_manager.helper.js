exports.downloadFile = async (storage, srcFilename, destFilename) => {
    let bucketName = 'zoom_bucket'
    const options = {
        destination: destFilename,
    };

    await storage.bucket(bucketName).file(srcFilename).download(options);

    console.log(
        `gs://${bucketName}/${srcFilename} downloaded to ${destFilename}.`
    );
}