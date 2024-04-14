const fs = require("fs");
const { assert } = require("./assert");

function getInput() {
    const filename = process.argv[2];
    assert(filename !== undefined);

    let trainA, trainB;

    let inputLines = fs
        .readFileSync(filename)
        .toString()
        .replace(/\r/g, "")
        .split("\n");

    trainA = inputLines[0].split(" ").slice(2);
    trainB = inputLines[1].split(" ").slice(2);

    return [trainA, trainB];
}

module.exports = { getInput };
