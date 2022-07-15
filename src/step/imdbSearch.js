const { page } = require('puppeteer-simple-cli-cores');
const { IMDB_SEARCH_BAR, PAGE_STATS, MOVIE_PAGE } = require('@/selector');
const { MOVIE_KEYWORD } = require('@/config/inputData.js');

module.exports = async function () {
    await page.waitForSelector(IMDB_SEARCH_BAR, { timeout: 10000 });
    await page.type(IMDB_SEARCH_BAR, MOVIE_KEYWORD);
    await page.keyboard.press('Enter');
    await page.waitForSelector(PAGE_STATS);
    await page.click(MOVIE_PAGE);
};
