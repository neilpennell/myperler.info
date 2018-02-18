'use strict';

exports.handler = function (event, context, callback) {
  const response = {
    statusCode: 200,
    headers: {
      "Access-Control-Allow-Origin": "http://localhost:3333"
    },
    body: JSON.stringify({
      message: `Hello World`,
      event: event
    })
  };

  callback(null, response);
};