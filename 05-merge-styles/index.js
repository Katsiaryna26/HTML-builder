const fs = require('fs');
const path = require('path');

const styleDir = path.join(__dirname, 'styles');
const newfileStyle = path.join(__dirname, 'project-dist', 'bundle.css');
const fileWr = fs.createWriteStream(newfileStyle);
fileWr.write('');

fs.promises.readdir(styleDir, {withFileTypes: true}).then ((files) => {
  files.forEach(file => {
    if (file.isFile() && path.extname(path.join(styleDir, file.name)) == '.css') {
      fs.readFile(path.join(styleDir, file.name), 'utf-8', (err, data) => {
        if (err) throw err;
          else {fileWr.write(data);} 
        })
      }
   })
})