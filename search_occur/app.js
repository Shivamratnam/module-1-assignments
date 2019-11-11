const fs = require('fs');

function searchData(key){
    file_path = './myfiles/test.txt';
    fs.readFile(file_path, 'utf-8', (err, data) => {
        if(err){
            console.log(err);
        } else {
            let count = 0;
            let result = data.split(/\s+/);
            result.forEach(word => {
                if(key.toLowerCase() == word.toLowerCase()){
                    count++;
                }
            });
            console.log(`Frequency is: ${count}`);
        }
    });
}

(function main(){
    if(process.argv.length < 3){
        console.log('Enter search keyword as third parameter.');
        process.exit(1);
    } else {
        let key = process.argv[2];
        searchData(key);
    }
})();