const AWS = require('aws-sdk')
const util = require('util');

require('dotenv').config()
const fs = require('fs')
const readFile = util.promisify(fs.readFile);

const s3 = new AWS.S3({
    params: {
        Bucket: process.env.DEPLOYMENT_BUCKET,
    }
})

const lambda = new AWS.Lambda()

const main = async () => {
    try {
        const file = await readFile('./deploy.zip');
        console.log('Uploading zip file...')
        await s3.upload({
            Key: 'deploy.zip',
            Body: file,
            Bucket: process.env.DEPLOYMENT_BUCKET
        }).promise();
        const scraperParams = {
            FunctionName: process.env.QUIZ_SCRAPER_ARN,
            S3Bucket: process.env.DEPLOYMENT_BUCKET,
            S3Key: "deploy.zip",
        };

        const postHandlerParams = {
            ...scraperParams,
            FunctionName: process.env.POST_HANDLER_ARN
        }

        console.log('Updating function code...')
        await lambda.updateFunctionCode(scraperParams).promise()
        await lambda.updateFunctionCode(postHandlerParams).promise()

        console.log("Updated functions!!")
    } catch (e) {
        console.log(e)
        process.exit(1);
    }
}

main()