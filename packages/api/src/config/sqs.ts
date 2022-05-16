import AWS from "aws-sdk";

const SQS = new AWS.SQS({
    credentials: {
        accessKeyId: "access_key_id",
        secretAccessKey: "secret_access_key",
    },
    region: "AWS_REGION",
})