// selenium-test.js

// Importerar Selenium WebDriver och andra nödvändiga moduler
const { Builder, By, until } = require('selenium-webdriver');

// Skapa ett testfall med Selenium
(async function example() {
    let driver = await new Builder().forBrowser('chrome').build();
    try {
        // Navigera till den webbsida du vill testa
        await driver.get('http://example.com');

        // Ditt testfall här
        // Exempel: Klicka på en knapp och verifiera att texten uppdateras

        // Klicka på knappen
        await driver.findElement(By.css('button')).click();

        // Vänta på att texten uppdateras
        await driver.wait(until.elementTextIs(driver.findElement(By.id('output')), 'Button clicked!'));
        
    } finally {
        await driver.quit();
    }
})();
