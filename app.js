const { webkit } = require('playwright');
require('dotenv').config();

(async () => {
    const browser = await webkit.launch({ headless: false });
    const page = await browser.newPage();
    await page.goto('https://forms.office.com/Pages/ResponsePage.aspx?id=XrX3mb6ce0aBQ5GXgpGK-2xPFY02OMtHi8uuteRYEGxUME9PUE1BSkRZREkzUDBGM1dBWjhRVFEyNS4u');

    // Fill an input.
    await page.fill('#i0116', process.env.USER);

    // Navigate implicitly by clicking a link.
    await page.click('#idSIButton9');

    // Fill an input.
    await page.fill('#i0118', process.env.PASSWORD);

    // Navigate implicitly by clicking a link.
    await page.click('#idSIButton9');
    // Navigate implicitly by clicking a link.
    await page.click('#idSIButton9');

    await page.click('text=Acepto');

    await page.click('text=Estudiante');

    await page.click('text=Remota');

    await page.click('text=No');

    await page.click('text=No');

    await page.click('text=No');

    await page.click('text=No');

    await page.click('text=Submit');

})();