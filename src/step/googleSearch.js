const { page } = require('puppeteer-simple-cli-cores');
const { SEARCH_BAR, SEARCH_STATS, IMDB_SITE } = require('@/selector');
const { KEYWORD } = require('@/config/inputData.js');

module.exports = async function () {
    await page.type(SEARCH_BAR, KEYWORD);
    await page.keyboard.press('Enter');
    await page.waitForSelector(SEARCH_STATS);
    await page.click(IMDB_SITE);
};
