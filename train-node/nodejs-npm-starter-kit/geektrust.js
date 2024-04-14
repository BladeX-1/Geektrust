const { getInput } = require("./src/getInput");
const { merge } = require("./src/merge");
const {
    removeStationsBeforeHydrabad,
} = require("./src/removeStationsBeforeHydrabad");
const {
    printJourneyEnded,
    printOnHydrabadArival,
    printOnHydrabadDeparture,
} = require("./src/printHelper");

//

function main() {
    let [trainA, trainB] = getInput();

    // up on arrival at hydrabad
    let trainA_onArivalAtHydrabad = removeStationsBeforeHydrabad(trainA);
    let trainB_onArivalAtHydrabad = removeStationsBeforeHydrabad(trainB);

    // incase the trains are already empty at hydrabad
    if (
        trainA_onArivalAtHydrabad.length === 0 &&
        trainB_onArivalAtHydrabad.length === 0
    ) {
        printJourneyEnded();
        return;
    }

    let trainAB_onDepartureFromHydrabad = merge(
        trainA_onArivalAtHydrabad,
        trainB_onArivalAtHydrabad
    );

    printOnHydrabadArival(trainA_onArivalAtHydrabad, trainB_onArivalAtHydrabad);

    printOnHydrabadDeparture(trainAB_onDepartureFromHydrabad);
}

main();
