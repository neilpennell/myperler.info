'use strict';

const AWS = require('aws-sdk'); // eslint-disable-line import/no-extraneous-dependencies

const dynamoDb = new AWS.DynamoDB.DocumentClient();
const params = {
    TableName: process.env.DYNAMODB_TABLE,
    Select: "COUNT"
};

module.exports.count = (event, context, callback) => {
    // fetch all todos from the database
    dynamoDb.scan(params, (error, result) => {
        // handle potential errors
        if (error) {
            console.error(error);
            callback(null, {
                statusCode: error.statusCode || 501,
                headers: {
                    'Content-Type': 'text/plain',
                    'Access-Control-Allow-Origin': '*'
                },
                body: 'Could not fetch the items.',
            });
            return;
        }

        // create a response
        const response = {
            statusCode: 200,
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Credentials': true // Required for cookies, authorization headers with HTTPS
            },
            body: JSON.stringify(result.Count),
        };
        callback(null, response);
    });
};
