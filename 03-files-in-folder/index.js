const fs = require('fs');
const path = require('path');

let folderPath = path.join(__dirname, 'secret-folder');
fs.promises.readdir(folderPath,
    { withFileTypes: true }).then(reslts => {
        reslts.forEach(res => {
            if (res.isFile()) {
                // console.log(res.name);
                let pathF = path.join(__dirname, "secret-folder", res.name);
                let ext = path.extname(pathF);
                let name = path.basename(pathF, ext);
                fs.promises.stat(pathF).then(result => {
                    //example - txt - 128.369kb 
                    console.log(name + " - " + ext.slice(1) + " - " + result.size/1024 + "kb")
                })
            }
        })
    })
