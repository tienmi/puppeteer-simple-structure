const puppeteer = require('puppeteer');

(async () => {
    const browser = await puppeteer.launch({ headless: false });
    const page = await browser.newPage();
    await page.goto('https://wt.franklin.com.tw:8081/openAccount/');

    //   await browser.close();
})();
