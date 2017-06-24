var datetime = require('node-datetime');
var someDate = "2015-03-23 16:45"
var anotherDate = "05-23-2017 20:33"

function Date(dateString) {
   var date = datetime.create(dateString);
   this.date = date.format('m-d-Y');
   this.hour = date.format('H');
   this.timeIsValid = TimeIsValid;
   this.dateIsValid = DateIsValid;
   return this;
}

function TimeIsValid()
{
  if(this.hour >= 5 && this.hour <= 19) {
    console.log("Hour is: " + this.hour);
    console.log("Valid!");
    return true;
  }
  else {
    console.log("Hour is: " + this.hour);
    console.log("Not valid!");
    return false;
  }
}

function DateIsValid()
{
  console.log("Checking date!");
  return 1
}

module.exports.Date = Date;
