var datetime = require('node-datetime');
var someDate = "2015-03-23 16:45"
var date = datetime.create(someDate);
var formattedDate = date.format('m-d-Y');
var formattedHour = date.format('H');
// console.log(formattedDate);
// console.log(formattedHour);

function

function TimeIsValid(date)
{
  var date = datetime.create(someDate);
  var formattedDate = date.format('m-d-Y');
  var formattedHour = date.format('H');
  if(formattedHour >= 5 && formattedHour <= 19) {
    console.log("Valid!");
    return true;
  }
  else {
    console.log("Not valid!");
    return false;
  }
}

function DateIsValid(date)
{

}


TimeIsValid(someDate)
