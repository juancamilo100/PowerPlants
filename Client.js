var http = require("http");
var url = "http://ascbackend.azurewebsites.net/api/powertrip/plants/86a703c1497440eea0c92fc35a44184e"

var request = http.get(url, function(response) {
    console.dir(response.statusCode);
    var body = "";

    response.on("data", function(dataChunk) {
      body += dataChunk;
    });

    response.on("end", function() {
      if(response.statusCode === 200) {
        try {
          var parsedData = JSON.parse(body);
          console.log(parsedData)
        } catch(error) {
          console.log(error);
        }
      }
      else {
        console.log(http.STATUS_CODES[response.statusCode]);
      }
    });


    request.on("error", function(error) {
      console.error(error.message);
    })
  });
