const fs = require('fs');
const { Parser } = require('json2csv');

const csvFileMaker = (data, path) => {
    const json2csvParser = new Parser();
    const csv = json2csvParser.parse(data);

    fs.writeFile(path, csv, "utf8", function (err) {
        if (err) console.log('Error :' + err);
        else console.log('File saved.');
    });
};

module.exports = csvFileMaker;