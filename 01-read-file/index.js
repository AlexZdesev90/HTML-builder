const path = require('path');
const fs = require('fs');

let p = path.join(__dirname, 'text.txt');

let res = fs.createReadStream(p, 'utf-8');
res.on('data', data => console.log(data));

