const { readFileSync, writeFileSync } = require('fs')

const first = readFileSync("./content/generic-folder/text.txt", "utf-8");
console.log(first);

writeFileSync("./content/writtenDynamically.txt",
 `Hello, this is the text file in the next folder: ${first}`, { flag: 'a' });
 