const path = require("path");

/**
 * @param {string[]} paths - the paths
 */
const baseDirection = (...paths) => path.resolve(__dirname, "..", path.join(...paths));

/**
 * @param {string[]} args - the paths
 */
const jestDirection = (...args) => baseDirection(path.join("jest", ...args));

const environment = {
    get isUnit() {
        return !environment.isE2E && !environment.isIntegration;
    },

    get isIntegration() {
        return process.env.TEST_ENV === "integration";
    },

    get isE2E() {
        return process.env.TEST_ENV === "e2e";
    },

    get isCI() {
        return Boolean(process.env.CI);
    },

    get isMacOS() {
        return process.platform === "darwin";
    },
};

exports.baseDirection = baseDirection;
exports.jestDirection = jestDirection;
exports.environment = environment;
