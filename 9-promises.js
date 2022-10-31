const { readFile, writeFile } = require('fs').promises;
// const util = require('util')
// const readFilePromise = util.promisify(readFile)
// const writeFilePromise = util.promisify(writeFile)

const doWord = async() => {
    try { 
        const first = await readFile('./content/file.txt', 'utf8');
        await writeFile('./content/file.txt', "I was added through a promise", { flag: 'a' });
        console.log(first)
    } catch (err) {
        console.log(err)
    }
}

doWord();

// const getText = (path) => {
//     return new Promise ((resolve, reject) => {
//         readFile(path, 'utf8', (err, result) => {
//             if (err) 
//             reject(err);
//             else {
//                 resolve(result);
//                 console.log("file read")
//             }
//         })
//     })
// }

// getText('./content/file.tx').then(message => {
//     console.log(`Text: ${message}`)
// }).catch(err => console.log("An error occured, file wasn't read"));
    
    