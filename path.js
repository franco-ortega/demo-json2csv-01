const path = require('path');

const catNotes = '/animals/cats/notes.txt';

// Get the different parts of the path
const dirName = path.dirname(catNotes); // /users/joe
const baseName = path.basename(catNotes); // notes.txt
const extName = path.extname(catNotes); // .txt

console.log({ dirName });
console.log({ baseName });
console.log({ extName });


// Get the file name without the extention
const fileName = path.basename(catNotes, path.extname(catNotes));
console.log({ fileName});


// Create a new path
// Looks like this adds a slash "/" after each part but not at the beginning
// It doesn't add a period "." to the beginning either
const animals = 'animals';
const notes = 'notes.txt';
const joinedPath = '.' + path.join('/', animals, '/', 'hamsters', notes);

console.log({ joinedPath });


// absolute and normalize try to calculate paths based on the arguments provided
// they do not confirm if the paths actually exist
const absolutePath = path.resolve('pizza.csv');
console.log({ absolutePath });

const absolutePathWithParameterFolder = path.resolve('csvFiles', 'pizza.csv');
console.log({ absolutePathWithParameterFolder });


const normalPath = path.normalize('/foods/../favorites/pizza.csv');
console.log({ normalPath });


// Create a path from an object
// root is ignored if dir is provided
// ext and name are ignored if base exists
const object = {
    dir: '/Objects/square',
    base: 'box.txt'
};

const objectPath = path.format(object);
console.log({ objectPath });

const objectTwo = {
    root: '/Objects/round/',
    name: 'circle',
    ext: '.txt'
};

const objectPathTwo = path.format(objectTwo);
console.log({ objectPathTwo });


// Parse a path to an object
// root, dir, base, ext, name
const parsedPath = path.parse('/Objects/oval/egg.txt');
console.log({ parsedPath });
