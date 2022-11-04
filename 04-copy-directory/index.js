const fs = require('fs');
const path = require('path');


function copyDir(){
    fs.unlink('files-copy', () => {} )
// fs.promises.rm(path.join(__dirname, 'files-copy'), {recursive: true, force: true})
fs.mkdir(path.join(__dirname, 'files-copy'),{recursive: true}, (err) => {
    if(err){
        throw new Error('ErroR');
}});
let pathFolder = path.join(__dirname, 'files');
// fs.copyFile(, 'destination.txt', callback);
fs.promises.readdir(pathFolder).then(fls => fls.forEach(fl => {
    let pathFile = path.join(__dirname, 'files', fl);
    //fs.promises.rm(path.join(__dirname, 'files-copy'), {recursive: true, force: true})
    fs.promises.copyFile(pathFile, path.join(__dirname, 'files-copy', fl))
}))

}
copyDir()
