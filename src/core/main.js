import * as path from 'path';
import puppeteer from 'puppeteer';

const root = path.resolve('', '../');
const { default: mainConfig } = await import(`${root}/main.config.js`);

(async () => {
    console.log('[Initialzation]: Preparing');
    const config = mainConfig.config || { headless: false, slowMo: 50 };
    const browser = await puppeteer.launch(config);
    const page = await browser.newPage();
    await page.goto(mainConfig.targetURL);
    // Catch log
    page.on('console', msg => console.log('[Log]: ', msg.text()));
    for (let step of mainConfig.step) {
        console.log('[Step]: ' + step.name + ' start.');
        try {
            const { default: runner } = await import(root + '/step' + step.path);
            await runner({ page });
            console.log('[Step]: ' + step.name + ' done.');
        } catch (e) {
            console.log('[Error]: ' + e);
        }
    }
    console.log('[End]');
})();
