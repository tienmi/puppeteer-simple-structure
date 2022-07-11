require('module-alias/register');

module.exports = {
    targetURL: 'https://www.google.com/',
    pipelines: [{ name: 'Search a good movie', path: '/situation/searchMovie.js' }],
    config: { headless: false, slowMo: 50, defaultViewport: null },
    retry: 1
};
