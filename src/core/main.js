const puppeteer = require('puppeteer');

module.exports = async (url, config = { headless: false, slowMo: 250 }) => {
    const browser = await puppeteer.launch(config);
    const page = await browser.newPage();
    await page.goto(url);
    // Catch log
    page.on('console', msg => console.log('PAGE LOG:', msg.text()));
    return page;
};
