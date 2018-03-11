'use strict';

const UUID = require('uuid/v4');
const AWS = require('aws-sdk');
const merge = require('deepmerge');

const dynamoDb = new AWS.DynamoDB.DocumentClient();

module.exports.create = (event, context, callback) => {
    const timestamp = new Date().getTime();
    let data = null;
    try {
        data = JSON.parse(event.body);
    } catch (e) {
        console.error('Validation Failed');
        callback(null, {
            statusCode: 400,
            headers: {
                'Content-Type': 'text/plain',
                'Access-Control-Allow-Origin': '*'
            },
            body: 'Could not create the item: ' + event.body.toString() + ' - ' + e.message,
        });
        return;
    }

    const base = {
        id: UUID(),
        createdAt: timestamp,
        updatedAt: timestamp,
        date_occured: timestamp
    };

    let item = merge(base, data);
    const params = {
        TableName: process.env.DYNAMODB_TABLE,
        Item: item,
    };

    // write  to the database
    dynamoDb.put(params, (error) => {
        // handle potential errors
        if (error) {
            console.error(error);
            callback(null, {
                statusCode: error.statusCode || 501,
                headers: {
                    'Content-Type': 'text/plain',
                    'Access-Control-Allow-Origin': '*'
                },
                body: 'Could not create the item: ' + error.toString() + ' ' + params,
            });
            return;
        }

        // create a response
        const response = {
            statusCode: 200,
            headers: {
                'Access-Control-Allow-Origin': '*'
            },
            body: JSON.stringify(params.Item),
        };
        callback(null, response);
    });
};