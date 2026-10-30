// Using the fs/promises module to read a file asynchronously and handle the result using Promises.

const fs = require('fs/promises');

fs.readFile('./file.txt', 'utf-8')
    .then((data) => {
        console.log(data);
    })
    .catch((error) => {
        console.log(error);
    });
