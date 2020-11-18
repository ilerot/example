const DownloadPage = require('../pageObjects/downloadPage');
const UrlsList = require('../testData/urls.js');
const fileFolder = require('../helpers/files.js');

const downloadPage = new DownloadPage();
const urls = new UrlsList();
const file = new fileFolder();

describe('Uploading', function () {

    it('Check tha file could be uploaded', async () => {
        await browser.get(urls.url_upload);
        await downloadPage.downloadFile(file.path);
        expect(await downloadPage.checkDownloadFile(file.fileName)).to.equal(true);
    });
});
