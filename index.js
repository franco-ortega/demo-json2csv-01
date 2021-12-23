const fs = require('fs');
const { Parser } = require('json2csv');
const catJsonData = require('./data/cats.json');

// This file contains three implementations of creating CSV files
// The first implentation creates a CSV file with no modifications to the data
// The second implentation creates a CSV file that only includes select columns of data
// The third implentation creates a CSV file that creates custom titles for the columns and provides default values for missing/empty data 
    // (see index2.js for the third implementation)



// ****** FIRST IMPLEMENTATION ****** //

// Creates a parser to parse the data
const json2csvParser = new Parser();

// Parses the data (this is synchronous)
const csvData = json2csvParser.parse(catJsonData);

// Creates a CSV file (from the parsed JSON data)
fs.writeFile("./csvFiles/indexCatsFromJson.csv", csvData, "utf8", function (err) {
    if (err) {
        console.log('Error :' + err);
    } else{
        console.log('File saved.');
    }
});
