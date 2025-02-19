console.log('Hello from script.js');

for(arg in process.argv){
    console.log(arg, process.argv[arg]);
}

// const fs = require('fs');
// const folderName = process.argv[2] || 'Project';
 
// try {
//     fs.mkdirSync(folderName);
//     fs.writeFileSync(`${folderName}/index.html`, '');
//     fs.writeFileSync(`${folderName}/app.js`, '');
//     fs.writeFileSync(`${folderName}/styles.css`, '');
// } catch (e) {
//     console.log("SOMETHING WENT WRONG!!!");
//     console.log(e);
// }