'use strict';

const AWS = require('aws-sdk'); // eslint-disable-line import/no-extraneous-dependencies
const deepMerge = require('deepmerge');
const merge = require('../shared/merge');

const dynamoDb = new AWS.DynamoDB.DocumentClient();

module.exports.update = (event, context, callback) => {
  const timestamp = new Date().getTime();

  // validation
  let data = {};
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

  data = deepMerge(data, {updatedAt: timestamp});
  const params = deepMerge({
    TableName: process.env.DYNAMODB_TABLE,
    Key: {id: event.pathParameters.id}
  }, merge(data));

  // update the item in the database
  dynamoDb.update(params, (error, result) => {
    // handle potential errors
    if (error) {
      console.error(error);
      callback(null, {
        statusCode: error.statusCode || 501,
        headers: {
          'Content-Type': 'text/plain',
          'Access-Control-Allow-Origin': '*'
        },
        body: 'Could not update the todo item with: ' + JSON.stringify(params),
      });
      return;
    }

    // create a response
    const response = {
      statusCode: 200,
      headers: {
        'Access-Control-Allow-Origin': '*'
      },
      body: JSON.stringify(result.Attributes),
    };
    callback(null, response);
  });
};
