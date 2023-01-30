const fsPromises = require('fs').promises;
const path = require('path');

const fileOps = async () => {
    try {
        const data = await fsPromises.readFile(path.join(__dirname, '../files', 'starter.txt'), 'utf-8'); // Reading data from files
        console.log(data);
        await fsPromises.unlink(path.join(__dirname, '../files', 'starter.txt')); // Deleting starter.txt
        await fsPromises.writeFile(path.join(__dirname, '../files', 'promiseWriteFiles.txt'), data); // Writing  af ile
        await fsPromises.appendFile(path.join(__dirname, '../files', 'promiseWriteFiles.txt'), ' Nice to meet you.'); // Appending a message to promiseWriteFiles.txt
        await fsPromises.rename(path.join(__dirname, '../files', 'promiseWriteFiles.txt'), path.join(__dirname, '../files', 'promiseComplete.txt')); // Renaming file from promiseWriteFiles.txt to promiseComplete.txt
        const newData = await fsPromises.readFile(path.join(__dirname, '../files', 'promiseComplete.txt'), 'utf-8'); // Fetching renamed data
        console.log(newData);

    } catch (e) {
        console.error(e);
    }
};

fileOps();

// fs.readFile(path.join(__dirname, 'files', 'starter.txt'), 'utf-8', (err, data) => { // or './files/starter.txt' (first one is a much better approach)
//     if(err) throw err;
//     console.log(data); // At first we are going to get a buffer data but we can use toString() to convert the file into the original content or we can use utf-8
// });

// fs.writeFile(path.join(__dirname, 'files', 'reply.txt'), 'Nice to meet you!', (err) => {
//     if(err) throw err;
//     console.log('Write complete.');
//     // Appending new content into reply.txt
//     fs.appendFile(path.join(__dirname, 'files', 'reply.txt'), '\n\nYes it is.', (err) => {
//         if(err) throw err;
//         console.log('Append complete.');

//         fs.rename(path.join(__dirname, 'files', 'reply.txt'), path.join(__dirname, 'files', 'newReply.txt'), (err) => {
//             if(err) throw err;
//             console.log('Rename complete.');
//         });
//     });
// });

// Creates another txt
// fs.appendFile(path.join(__dirname, 'files', 'test.txt'), 'Testing text', (err) => {
//     if(err) throw err;
//     console.log('Append complete.');
// });