const csvFileMaker = require('./csvFileMakers/csvFileMaker');
const catsData = require('./data/cats');
const catsJson =  require('./data/cats.json');

const path = './csvFiles/'


// creates a CSV file from data in a js file
const fileName = 'appCatsJs.csv'
const catPath = path + fileName;

csvFileMaker(catsData, catPath);


// creates a CSV file from data in a JSON file
const fileNameJson = 'appCatsJSON.csv'
const catPathJson = path + fileNameJson;

csvFileMaker(catsJson, catPathJson);
