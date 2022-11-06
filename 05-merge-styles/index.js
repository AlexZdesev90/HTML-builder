const path = require('path');
const fs = require('fs');

let input = '';
fs.promises.readdir(path.join(__dirname, 'styles')).then(async (files) => {
    let result = fs.createWriteStream(path.join(__dirname, 'project-dist/bundle.css'));
    files.forEach(async (file) => {
        const pathToFile = path.join(path.join(__dirname, 'styles'), file);
        const name = path.basename(pathToFile);
        const extention = path.extname(pathToFile);
        if(extention === '.css'){
            input = fs.createReadStream(path.join(path.join(__dirname, 'styles'), name),'utf-8');
            input.on("data", (data) => {
                result.write(data + '\n');
            })
        }
    })
})


    

