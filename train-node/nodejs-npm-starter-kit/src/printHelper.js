function printOnHydrabadArival(trainA, trainB) {
    console.log("ARRIVAL", "TRAIN_A", "ENGINE", trainA.join(" "));
    console.log("ARRIVAL", "TRAIN_B", "ENGINE", trainB.join(" "));
}

function printOnHydrabadDeparture(trainAB) {
    console.log("DEPARTURE", "TRAIN_AB", "ENGINE", "ENGINE", trainAB.join(" "));
}

function printJourneyEnded() {
    console.log("JOURNEY_ENDED");
}

module.exports = {
    printJourneyEnded,
    printOnHydrabadArival,
    printOnHydrabadDeparture,
};
