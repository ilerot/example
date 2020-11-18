class FramePage {
       topFrame = by.name('frame-top');
       leftFrame = by.name('frame-left');
       middleFrame = by.name('frame-middle');
       rightFrame = by.name('frame-right');
       bottomFrame = by.name('frame-bottom');
       contentMiddleFrame = by.css('#content');
       textInFrame = by.css('body');

    async switchToFrame(frame) {
        await browser.switchTo().frame(await element(frame).getWebElement());
    }

    async getBodyIframe() {
        const elm = await element(this.textInFrame);
        await helpers.waitForVisible(elm);
        return elm.getText();
    }
}

module.exports = FramePage;
