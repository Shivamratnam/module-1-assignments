const fs = require('fs');

var path = './test.txt';
fs.readFile(path, 'utf-8', (err, data) => {
    if(err){
        console.log(err);
    } else {
        let res = data.split(/\s+/);
        console.log(res);
        sum = 0;
        res.forEach(element => {
            sum += parseInt(element);
        });
        console.log(`Total Sum: ${sum}`);
    }
});