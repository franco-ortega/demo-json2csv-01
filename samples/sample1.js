const fs = require('fs');
const Json2csvParser = require('json2csv').Parser;

let fields = ["key1", "key2", "key3", "key4", "key5", "key6", "key7"];

const retval = [
    // row 1
    {
      key1: "a",
      key2: "a",
      key3: "a",
      key4: "a",
      key5: "a",
      key6: "a",
      key7: "a"
    },
    // row 2
    {
      key1: "b",
      key2: "b",
      key3: "b",
      key4: "b",
      key5: "b",
      key6: "b",
      key7: "b"
    }
    // more rows
];

const json2csvParser = new Json2csvParser({ fields });
const result = json2csvParser.parse(retval);

console.log(result);
fs.writeFile("localPath/test.csv", [result], "utf8", function (err) {
    if (err) {
        console.log('Some error occured - file either not saved or corrupted file saved.');
    } else{
        console.log('It\'s saved!');
    }
});
