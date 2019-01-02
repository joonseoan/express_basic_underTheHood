const path = require('path');

console.log('rootDirectory: ', path.dirname(process.mainModule.filename))
// => C:\Users\joona\OneDrive\myApps\node\2ndPhase\express_server

// path.dirname(parameter) : finding out the directory from 'process.mainModule.filename'  to app.js (root directory)
module.exports = path.dirname(process.mainModule.filename);