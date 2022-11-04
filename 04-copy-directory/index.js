const fs = require('fs');
const path = require('path');


async function copyDir(){

await fs.promises.rm(path.join(__dirname, 'files-copy'),{recursive: true, force: true});
await fs.promises.mkdir(path.join(__dirname, 'files-copy'),{recursive: true}, (err) => {
    if(err){
        throw new Error('ErroR');
}});
let pathFolder = path.join(__dirname, 'files');

fs.promises.readdir(pathFolder).then(fls => fls.forEach(fl => {
    let pathFile = path.join(__dirname, 'files', fl);
    fs.promises.copyFile(pathFile, path.join(__dirname, 'files-copy', fl))
}))

}
copyDir()
