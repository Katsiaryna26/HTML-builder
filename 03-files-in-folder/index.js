const fs = require("fs");
const path = require("path");
const { stdout } = process;

fs.readdir(path.join(__dirname, 'secret-folder'), (err,files)=>{
  files.forEach((file)=>{
    fs.stat(path.resolve(path.join(__dirname, 'secret-folder'), file), (err, stats) => {
      if (stats.isFile()) {
        stdout.write(`${(path.parse(file)).name} - ${(path.parse(file)).ext.replace(".", "")} - ${((stats.size)/1024).toFixed(2)}kb\n`);
       }
    })
  })
})