function assert(exp) {
    if (!exp) {
        let errString = "assertion error" + exp;
        throw errString;
    }
}

module.exports = { assert };
