class DownloadPage {
        inputFileUpload = by.id('file-upload');
        buttonUpload = by.id('file-submit');
        uploadedFiles = by.id('uploaded-files');

    async downloadFile(path) {
        const elm = await element(this.inputFileUpload);
        const button = await element(this.buttonUpload);
        await helpers.waitForVisible(elm);
        await elm.clear();
        await elm.sendKeys(path);
        await button.click();
    }

    async checkDownloadFile(nameFile) {
        const elm = await element(this.uploadedFiles);
        await helpers.waitForVisible(elm);
        const nameUploadFile = await elm.getText();
        if(nameFile === nameUploadFile) {
            return true;
        } else {
            throw new Error('Invalid file name');
        }
    }
}

module.exports = DownloadPage;
