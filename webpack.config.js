var path = require('path');

module.exports = {
    entry: path.resolve(__dirname, 'dev/main.js'),
    output: {
        path: path.resolve(__dirname, 'ub-static'),
        filename: 'bundle.js',
    },
};