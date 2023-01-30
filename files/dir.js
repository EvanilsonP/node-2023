const fs = require('fs');
// Avoiding duplicate names of the same directory
// If it does not exist, create it
if(!fs.existsSync('./directory')) {
    fs.mkdir('./directory', (err) => {
        if(err) throw err;
        console.log('Directoy created.');
    });
};

// If does exist, remove it
if(fs.existsSync('./directory')) {
    fs.rmdir('./directory', (err) => {
        if(err) throw err;
        console.log('Directoy removed.');
    });
};