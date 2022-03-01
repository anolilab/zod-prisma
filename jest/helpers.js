// eslint-disable-next-line unicorn/prefer-module
const path = require("path");

/**
 * @param {string[]} paths - the paths
 */
// eslint-disable-next-line no-undef,unicorn/prefer-module
const baseDirection = (...paths) => path.resolve(__dirname, "..", path.join(...paths));

/**
 * @param {string[]} arguments_ - the paths
 */
const jestDirection = (...arguments_) => baseDirection(path.join("jest", ...arguments_));

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

// eslint-disable-next-line unicorn/prefer-module
exports.baseDirection = baseDirection;
// eslint-disable-next-line unicorn/prefer-module
exports.jestDirection = jestDirection;
// eslint-disable-next-line unicorn/prefer-module
exports.environment = environment;
