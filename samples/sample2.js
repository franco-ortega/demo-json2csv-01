const fs = require('fs');
const { Parser } = require('json2csv');

const myCars = [
    {
      "car": "Audi",
      "price": 40000,
      "color": "blue"
    }, {
      "car": "BMW",
      "price": 35000,
      "color": "black"
    }, {
      "car": "Porsche",
      "price": 60000,
      "color": "green"
    }
];
  
const json2csvParser = new Parser();
const csv = json2csvParser.parse(myCars);
  
console.log(csv);
// console.log(json2csvParser.opts);
// console.log(json2csvParser.opts.fields);
// console.log(json2csvParser.opts.fields[0]);
// console.log(json2csvParser.opts.fields[0].value);

// const carHolder = json2csvParser.opts.fields[0].value;
// console.log(carHolder({'car': 'ttt'}));
// const priceHolder = json2csvParser.opts.fields[1].value;
// console.log(priceHolder({'price': '$$$'}));
// const colorHolder = json2csvParser.opts.fields[2].value;
// console.log(colorHolder({color: 'green'}, 'price', 'oops!'));


fs.writeFile("csvFiles/csvOne.csv", csv, "utf8", function (err) {
    if (err) {
        console.log('Some error occured - file either not saved or corrupted file saved.');
    } else{
        console.log('It\'s saved!');
    }
});



//////////////////////////////////////////////////////
console.log('///////////VERSION TWO///////////////');
// const fields = ['car', 'color'];

// const json2csvParser2 = new Parser({ fields });
// const csv2 = json2csvParser2.parse(myCars);

// console.log(csv2);

// fs.writeFile("csvFiles/csvTwo.csv", csv2, "utf8", function (err) {
//     if (err) {
//         console.log('Some error occured - file either not saved or corrupted file saved.');
//     } else{
//         console.log('It\'s saved!');
//     }
// });



//////////////////////////////////////////////////////
console.log('///////////VERSION THREE///////////////');

const fields = [{
    label: 'Car Name',
    value: 'car'
  },{
    label: 'Price USD',
    value: 'price'
}];

const json2csvParser3 = new Parser({ fields });
const csv3 = json2csvParser3.parse(myCars);

console.log(csv3);

fs.writeFile("csvFiles/csvThree.csv", csv3, "utf8", function (err) {
    if (err) {
        console.log('Some error occured - file either not saved or corrupted file saved.');
    } else{
        console.log('It\'s saved!');
    }
});


//////////////////////////////////////////////////////
console.log('///////////VERSION FOUR///////////////');

const myCars2 = [
    {
      "car": "Audi",
      "price": 40000,
      "color": ""
    }, {
      "car": "BMW",
      "price": 0,
      "color": "black"
    }, {
      "price": 60000,
      "color": "green"
    }
];


const fields3 = [{
    label: 'Car Name',
    value: 'car'
  },{
    label: 'Price USD',
    value: 'price'
}];

const json2csvParser4 = new Parser({ fields3 });
const csv4 = json2csvParser4.parse(myCars2);

console.log(csv4);

fs.writeFile("csvFiles/csvFour.csv", csv4, "utf8", function (err) {
    if (err) {
        console.log('Some error occured - file either not saved or corrupted file saved.');
    } else{
        console.log('It\'s saved!');
    }
});
