const FramePage = require('../pageObjects/framePage');
const UrlsList = require('../testData/urls');

describe('Nested frames', function () {

    const framePage = new FramePage();
    const  urlsList = new UrlsList();

    it('Test left Iframe', async () => {
        await browser.get(urlsList.url_frames);
        await framePage.switchToFrame(framePage.topFrame);
        await framePage.switchToFrame(framePage.leftFrame);
        expect(await framePage.getBodyIframe()).to.equal('LEFT');
    });

    it('Test middle Iframe', async () => {
        await browser.switchTo().defaultContent();
        await framePage.switchToFrame(framePage.topFrame);
        await framePage.switchToFrame(framePage.middleFrame);
        expect(await helpers.getTextByLocator(framePage.contentMiddleFrame)).to.equal('MIDDLE');
    });

    it('Test right Iframe', async () => {
        await browser.switchTo().defaultContent();
        await framePage.switchToFrame(framePage.topFrame);
        await framePage.switchToFrame(framePage.rightFrame);
        const contentRightFrame = await framePage.getBodyIframe();
        expect(contentRightFrame).to.equal('RIGHT');
    });

    it('Test bottom Iframe', async () => {
        await browser.switchTo().defaultContent();
        await framePage.switchToFrame(framePage.bottomFrame);
        expect(await framePage.getBodyIframe()).to.equal('BOTTOM');
    });
});
