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

    await page.click('//*[@id="form-container"]/div/div/div[1]/div/div[1]/div[2]/div[2]/div[2]/div[2]/div/div[2]/div/div[1]/div/label');

    await page.click('//*[@id="form-container"]/div/div/div[1]/div/div[1]/div[2]/div[2]/div[2]/div[3]/div/div[2]/div/div[2]/div/label');

    await page.click('//*[@id="form-container"]/div/div/div[1]/div/div[1]/div[2]/div[2]/div[2]/div[4]/div/div[2]/div/div[2]/div/label');

    await page.click('//*[@id="form-container"]/div/div/div[1]/div/div[1]/div[2]/div[2]/div[2]/div[5]/div/div[2]/div/div[2]/div/label');

    await page.click('//*[@id="form-container"]/div/div/div[1]/div/div[1]/div[2]/div[2]/div[2]/div[6]/div/div[2]/div/div[2]/div/label');

    await page.click('//*[@id="form-container"]/div/div/div[1]/div/div[1]/div[2]/div[2]/div[2]/div[7]/div/div[2]/div/div[2]/div/label');

    await page.click('//*[@id="SelectId_0"]');
    await page.click('//*[@id="SelectId_0"]/div[2]/div[2]');

    await page.click('//*[@id="form-container"]/div/div/div[1]/div/div[1]/div[2]/div[3]/div[1]/button/div');
})();