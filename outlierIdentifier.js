var dateIdentifier = require(dateIdentifier);

function findOutlierId(parsedData) {
    var plants = []
    for (var i in parsedData) {
        var plant = parsedData[i].plant

        var deliveredArray = plant.delivered
        for (var i = 0; i < deliveredArray; i++) {
            if (dateIdentifier.TimeIsValid(deliveredArray[i].time))
                plant.dtSum += deliveredArray[i].time
        }

        plants.push(plant)
    }

    console.log("plants (pre-sort): " + plants)

    plants.sort(function (a, b) {
        return a - b;
    })

    console.log("plants (post-sort): " + plants)

    var diffFirstElementsSum = plants[1].dtSum - plants[0].dtSum
    var diffLastElementsSum = plants[plants.length - 1].dtSum - plants[plants.length - 2].dtSum
    var outlier;
    if (diffFirstElementsSum > diffLastElementsSum) {
        outlier = plants[0]
    }
    else {
        outlier = plants[plants.length - 1]
    }

    console.log("outlier: " + outlier)

    return outlier.id
}