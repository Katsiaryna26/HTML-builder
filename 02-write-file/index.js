const fs = require('fs');
const path = require("path");
const file = path.join(__dirname, "text.txt")
const {stdout, stdin } = process;
fs.open(file, 'r+', (err) => {
    if(err) throw err;
});
stdout.write('Привет, введи текст!\n');
stdin.on("data", (data) => {
    if (data.toString().trim() == "exit") {
        stdout.write('Пока, удачи!')
        process.exit();
    }
    fs.appendFile(file, data.toString(), () => {})
  })

process.on('SIGINT', () => {
    stdout.write('Пока, удачи!');
    process.exit();
});