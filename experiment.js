var dataChecker = require("./dateIdentifier")

var someDate = "2015-03-23 16:45"
var anotherDate = "05-23-2017 20:33"

var dateObject = dataChecker.Date(someDate)

console.log(dateObject.timeIsValid());
console.log(dateObject.dateIsValid());
