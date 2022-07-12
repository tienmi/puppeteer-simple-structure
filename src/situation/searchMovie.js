const googleSearch = require('@/step/googleSearch.js');
const imdbSearch = require('@/step/imdbSearch.js');

module.exports = async function () {
    await googleSearch();
    await imdbSearch();
};
