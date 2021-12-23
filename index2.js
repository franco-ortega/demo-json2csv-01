const fs = require('fs');
const { Parser } = require('json2csv');
const catJsonData = require('./data/cats.json');

// ****** THIRD IMPLEMENTATION ****** //
// The fields array will now contain new objects instead of strings.
// Each new object in the fields array will represent a property found in the objects of the JSON data.
// Each new object may contains the following properties: label, value, default
// "label" will be the new custom title
// "value" is the original name of the property in the JSON data
// "default" provides a value for properties in the JSON data that are missing or have no value
    // if no "default" is provided, the rows without data will be empty

// For example, the following JSON data has two properties: propertyKey and id
// const jsonData = [
//     {
//         propertyKey: 'propertyValueOne',
//         id: 1
//     },
//     {
//         propertyKey: 'propertyValueTwo',
//         id: 2
//     },
//     {
//         propertyKey: 'propertyValueThree',
//         id: 3
//     }
// ];

// Therefore, the fields array for jsonData can contain a new object for each property in the jsonData objects: propertyKey and id
// const fields = [
//     {
//         label: 'Property Key',
//         value: 'propertyKey',
//         default: 'n/a'
//     },
//     {
//         label: 'ID Number',
//         value: 'id',
//         default: 'No ID available'
//     }
// ];

// Any properties not included in the fields array will be omitted, so those columns will not appear in the CSV file.



// In the following example:
// "name" will be included; its column title will be unchanged, but its default is "NAMELESS"
// "age" will be included; its column title will be unchanged, but its default is "FUREVER YOUNG"
// "fur" will be included with a custom column title of "Fur Color", and its default is "FURLESS"
// "food" will be included, but there is no "food" property in the data, so there will be no data to display
    // however, a default is provided, so the default of "HUNGRY" will be entered into the rows of this column
// "owner" will be included, but there is no "owner" property in the data, so there will be no data to display
    // additionally, no default is provided, so these rows in this column will be empty
// "owner" is included as a field, but there is no "owner" property in the data, and no default is provided, so these rows will be left empty


const fields = [
    {
        value: 'name',
        default: 'NAMELESS'
    },
    {
        value: 'age',
        default: 'FUREVER YOUNG'
    },
    {
        label: 'Fur Color',
        value: 'fur',
        default: 'FURLESS'
    },
    {
        label: 'Cat Food',
        value: 'food',
        default: 'HUNGRY'
    },
    {
        value: 'owner',
    }
];

// Creates a parser to parse the data
const json2csvParserWithCustomTitles = new Parser({ fields });

// Parses the data (this is synchronous)
const csvWithCustomTitles = json2csvParserWithCustomTitles.parse(catJsonData);

// Creates a CSV file
fs.writeFile("./csvFiles/indexTwoCats.csv", csvWithCustomTitles, "utf8", (err) => {
    if (err) console.log('Error :' + err);
    else console.log('File saved.');
});
