const helpers = {
    async waitForVisible(elem) {
        const EC = protractor.ExpectedConditions;
        return browser.driver.wait(EC.visibilityOf(elem), 30000);
    },

    async waitForNotVisible(elem) {
        const EC = protractor.ExpectedConditions;
        return browser.driver.wait(EC.invisibilityOf(elem), 30000);
    },

    async getTextByLocator(locator) {
      const elem = await element(locator);
      await this.waitForVisible(elem);
      return elem.getText();
    },
};

module.exports = helpers;
