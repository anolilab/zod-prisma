const browsers = require("browserslist-config-anolilab");

module.exports = {
    presets: [
        [
            "@anolilab/babel-preset",
            {
                targets: browsers["production"],
                typescript: true,
                looseClasses: false,
                looseComputedProperties: true,
                looseParameters: true,
                looseTemplateLiterals: true,
                polyfillRegenerator: true
            },
        ],
    ],
};
