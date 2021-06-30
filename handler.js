const serverlessExpr = require('aws-serverless-express');
const app = require('./src/index');

const server = serverlessExpr.createServer(app);

exports.handler = (event, context) => {
  return serverlessExpr.proxy(server, event, context);
}