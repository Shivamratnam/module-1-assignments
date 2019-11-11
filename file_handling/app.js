const fs = require('fs');

if(process.argv.length == 3){
    var file = process.argv[2];
    fs.readFile(file, (err, data) => {
        if(err){
            console.log(`ERROR: Unable to read file\n${err}`);
        } else {
            console.log(data.toString());
        }
    });
} else {
    console.log("Provide file name as third parameter in the command line.");
}