const fs = require('fs');
const path = require('path');
const { stdout } = process;

fs.mkdir(path.join(__dirname,'files-copy'),{recursive: true}, err=>{
    if (err) throw err;
})

if (path.join(__dirname,'files-copy')) {
    fs.readdir(path.join(__dirname,'files-copy'), (err, files)=>{
        files.forEach(file=>{
            fs.rm((path.join(__dirname,'files-copy',file)),err=>{
                if (err) throw err;
            })
        })
    })
}

fs.readdir(path.join(__dirname,'files'), (err, files)=>{
    files.forEach(file=>{
        fs.copyFile(path.join(__dirname,'files', file), path.join(__dirname,'files-copy',file), err=>{
            if (err) throw err;
        })
    })
})