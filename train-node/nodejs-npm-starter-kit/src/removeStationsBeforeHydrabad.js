let trainAStations = "CHN SLM BLR KRN HYB NGP ITJ BPL AGA NDL".split(" ");
let trainBStations = "TVC SRR MAQ MAO PNE HYB NGP ITJ BPL PTA NJP GHY".split(
    " "
);

let hydrabadIndexA = 4;
let hydrabadIndexB = 5;

stationsBeforeHydrabad = trainAStations
    .slice(0, hydrabadIndexA)
    .concat(trainBStations.slice(0, hydrabadIndexB));

function removeStationsBeforeHydrabad(trainX) {
    return trainX.filter(
        (element) => !stationsBeforeHydrabad.includes(element)
    );
}

module.exports = { removeStationsBeforeHydrabad };
