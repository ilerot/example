const LoadPage = require('../pageObjects/loadPage');
const UrlsList = require('../testData/urls.js');

describe('Test for dynamic loading', function () {
    const loadPage = new LoadPage();
    const urls = new UrlsList();

    it('Hidden element on page', async () => {
        await browser.get(urls.url_dynamic_load);
        await element(loadPage.firstLink).click();
        await loadPage.loadingInformation();
        expect(await loadPage.getLoadedInformation()).to.equal('Hello World!');
    });

    it('Element rendered after the fact', async () => {
        await browser.get(urls.url_dynamic_load);
        await element(loadPage.secondLink).click();
        await loadPage.loadingInformation();
        expect(await loadPage.isPresentStatusLoadingInformation()).to.equal(true);
        expect(await loadPage.getLoadedInformation()).to.equal('Hello World!');
    });
});
