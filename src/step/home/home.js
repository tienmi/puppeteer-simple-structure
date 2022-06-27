export default async function ({ page }) {
    console.log('HOME');
    await page.type('[data-vv-name="ID"', 'F222222222');
}
