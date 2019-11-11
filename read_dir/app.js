const fs = require('fs');

var path = './myfiles';

fs.readdir(path, (err, files) => {
    if(err){
        console.log(err);
    } else {
        files.forEach(file => {
            let temp = file.split('.');
            if(temp.length > 1){ // file
                console.log(`FILE: ${file}`);
            } else { // directory
                console.log(`DIR: ${file}`);
            }
        });
    }
});