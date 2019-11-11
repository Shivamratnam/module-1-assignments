const fs = require('fs');

function createNewFile(file_data){
    file_path = './myfiles/test.txt';
    fs.writeFile(file_path, file_data, (err) => {
        if(err){
            console.log(err);
        } else {
            console.log('file created.');
        }
    })
}

(function main(){
    if(process.argv.length < 3){
        console.log('Enter file data as third parameter.');
        process.exit(1);
    } else {
        let file_data = process.argv[2];
        createNewFile(file_data);
    }
})();