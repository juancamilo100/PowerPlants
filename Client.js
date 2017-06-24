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

          var plants = []
          for (var i in parsedData)
          {
            var plant = parsedData[i].plant

            var deliveredArray = plant.delivered
            for (var i = 0; i < deliveredArray; i++) {
              if (deliveredArray[i].time.isValid()) // TODO
                plant.dtSum += deliveredArray[i].time
            }

            plants.push(plant)
          }

          console.log("plants (pre-sort): " + plants)

          plants.sort(function(a, b) {
            return a - b;
          })

          console.log("plants (post-sort): " + plants)

          var outlier;
          if ((plants[1].dtSum - plants[0].dtSum) > (plants[plants.length - 1].dtSum - plants[plants.length - 2].dtSum)) {
            outlier = plants[0]
          }
          else {
            outlier = plants[plants.length - 1]
          }

          console.log("outlier: " + outlier)

          // return outlier.id
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
