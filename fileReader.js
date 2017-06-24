var dataChecker = require("./dateIdentifier")
var fs = require('fs');


function ReadFile(callback) {
  fs.readFile('heneywelljson.txt', function(err, data) {
      var receivedData = JSON.parse(data.toString());
      console.log(receivedData.body);
      callback(receivedData)
    });
}

module.exports.readFile = ReadFile;
