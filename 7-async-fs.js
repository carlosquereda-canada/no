const { readFile, writeFile } = require('fs');

readFile('./content/generic-folder/text.txt', 'utf8', (err, result) => {
    if (err) {
        console.log(err);
        return;
    }
    console.log(result)
})

writeFile('./content/file.txt', `I was created asynchronously`, (err, result) => console.log(result))
