# CSV-File-Maker

This project uses [json2csv](https://www.npmjs.com/package/json2csv) (npm package) to create CSV files from JSON data. To use this project, clone the repo to your local environment and run the terminal command `npm install` to install dependencies.

---
Creating CSV Files:

1. index.js has two implementations of creating CSV files. The first implementation makes no modifications to the data. The second implementation adds only select columns to the CSV file. To create the two CSV files from index.js, run the terminal command `node index`.

1. index2.js has a third implementation, which creates custom titles for some of the columns. It also provides default values for rows that have no data and for columns that do not exist. To create the one CSV file from index2.js, run the terminal command `node index2`.
1. The samples folder is a hot mess of experimentation that is probably best left ignored.

---

---
### Initial Setup

These are the terminal commands that I ran to set up this project:
1. `npm init -y`
1. `npm install json2csv --save`
