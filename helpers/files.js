const path = require('path')

class Files {
    fileName = 'test.txt';
    path = path.resolve('testData/' + this.fileName);
}

module.exports = Files;
