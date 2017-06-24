var dateIdentifier = require("./dateIdentifier")

module.exports = exports = function(parsedData) {
    var plants = []
    for (var i in parsedData) {
        var plant = parsedData[i].plant

        var deliveredArray = plant.delivered
        for (var i = 0; i < deliveredArray; i++) {
            var isValid = dateIdentifier.Date(deliveredArray[i].time).TimeIsValid() && dateIdentifier.Date(deliveredArray[i].time).DateIsValid()
            if (isValid)
                plant.dtSum += deliveredArray[i].time
        }

        plants.push(plant)
    }

    var outlier
    if (plants.length > 2) {
        console.log("plants (pre-sort): " + plants)

        plants.sort(function (a, b) {
            return a.dtSum - b.dtSum
        })

        console.log("plants (post-sort): " + plants)

        var diffFirstElementsSum = plants[1].dtSum - plants[0].dtSum
        var diffLastElementsSum = plants[plants.length - 1].dtSum - plants[plants.length - 2].dtSum
        if (diffFirstElementsSum > diffLastElementsSum) {
            outlier = plants[0]
        }
        else {
            outlier = plants[plants.length - 1]
        }
    }

    console.log("outlier: " + outlier)

    return outlier.id
}