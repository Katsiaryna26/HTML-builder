const fs = require('fs');
const path = require('path');

const redstrem = fs.createReadStream(path.join(__dirname, "text.txt"),'utf-8');
let data = '';
redstrem.on('data',chunk=>data+=chunk);
redstrem.on('end',()=>console.log('End',data));
redstrem.on('error',error=>console.log('Error',error.message));
