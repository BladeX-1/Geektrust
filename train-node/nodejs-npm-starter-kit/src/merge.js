const HashMap = require("hashmap");
const _ = require("lodash");

function getStationDistanceFromString() {
    const station_distances_data_splited =
        "CHN - 0, SLM - 350, BLR - 550, KRN - 900, HYB - 1200, NGP - 1600, ITJ - 1900, BPL - 2000, AGA - 2500, NDL - 2700, TVC - 0, SRR - 300, MAQ - 600, MAO - 1000, PNE - 1400, HYB - 2000, NGP - 2400, ITJ - 2700, BPL - 2800, PTA - 3800, NJP - 4200, GHY - 4700".split(
            ", "
        );

    let memo = new HashMap();

    for (let i = 0; i < station_distances_data_splited.length; i++) {
        let singleStationData = station_distances_data_splited[i];
        let [station, distance] = singleStationData.split(" - ");
        memo.set(station, Number(distance));
    }

    return memo;
}

function getStationDistance(station) {
    return allStationData.get(station);
}

function merge(trainA, trainB) {
    let trainAB = trainA.concat(trainB);
    trainAB = _.sortBy(trainAB, getStationDistance);
    trainAB.reverse();
    return trainAB;
}

allStationData = getStationDistanceFromString();

module.exports = { merge };
