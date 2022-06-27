const path = require('path');

module.exports = {
    target: 'node',
    entry: './main.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'core.bundle.js'
    }
};
