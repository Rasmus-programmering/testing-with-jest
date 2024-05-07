// Importerar Selenium WebDriver och andra nödvändiga moduler
const { Builder, By, until } = require('selenium-webdriver');

// Skapa ett testfall med Selenium
(async function example() {
    let driver = await new Builder().forBrowser('chrome').build();
    try {
        // Navigera till den webbsida du vill testa
        await driver.get('file:///C:/Users/rasmu/testing-with-jest/src/index.html');

        // Klicka på knappen "Vad finns överst på stacken?"
        await driver.findElement(By.id('peek')).click();

        // Vänta på att texten uppdateras och verifiera att den förväntade texten visas
        await driver.wait(until.elementTextIs(driver.findElement(By.id('top_of_stack')), 'Expected Text'));
        
    } finally {
        await driver.quit();
    }
})();

