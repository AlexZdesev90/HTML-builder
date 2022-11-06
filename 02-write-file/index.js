const fs = require('fs');
const {stdin, stdout, exit} = require('process');
// const readline = require('readline/promises');
const path = require('path');

let p2 = path.join(__dirname, 'text.txt');
let stream = fs.createWriteStream(p2, 'utf-8');

stdout.write('Enter something pls...');
stdin.on('data', (el) => {
    if(el.toString().trim() === 'exit'){
        stdout.write('Good luck next!');
        exit();
    }else{
        stream.write(el)
    }
})

process.on('SIGINT', () => {
    stdout.write('Good luck!');
    exit()
})


