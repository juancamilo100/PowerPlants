var fileReader = require("./fileReader")

var jsonData = fileReader.readFile(function(data) {
  console.log(data.body);
});
