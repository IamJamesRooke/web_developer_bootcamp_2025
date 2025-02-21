const fs = require('fs');
const folderName = process.argv[2] || 'new_project';

// fs.mkdir('Dogs', { recursive: true }, (err) => {
//     console.log("IN THE CALLBACK!!")
//     if (err) throw err;
// });

fs.mkdirSync(folderName);
fs.writeFileSync(`${folderName}/index.html`, '');
fs.writeFileSync(`${folderName}/script.js`, '');
fs.writeFileSync(`${folderName}/style.css`, '');