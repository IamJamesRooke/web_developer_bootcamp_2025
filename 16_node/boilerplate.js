const fs = require('fs');
console.log(fs)

// fs.mkdir('Dogs', { recursive: true }, (err) => {
//     console.log("IN THE CALLBACK!!")
//     if (err) throw err;
// });

const folderName = process.argv[2] || 'project';
fs.mkdirSync(folderName);
console.log("I come after mkdir in the file")