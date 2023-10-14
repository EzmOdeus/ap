const express = require('express')
const app = express()
app.use(express.json())
app.get('/', (req, res) => {
    res.json([
      {
        id: 1,
        name: "https://media.islamway.net/lessons/582/452_Samer_AsmMohemen.mp4",
      },
      {
        id: 2,
        name: "seyam",
      },
      {
        id: 3,
        name: "ahmed",
      },
    ]);
    
})
app.get('/form', (req, res) => {
    res.send(`welcome ${req.query.fname}`);
    console.log();
})
app.listen(5000, () => {
    console.log('server OK!')
})

// // const os = require('os')
// // console.log(`arch is : ${os.arch}`);
// // console.log(`host name is : ${os.hostname}`);
// // console.log(`freespace is : ${os.freemem}`);
// // console.log(`platform is : ${os.platform}`);
// // console.log(`type is : ${os.type}`);
// // console.log(`version is : ${os.version}`);

// // ===========
// const fs = require('fs')
// console.log(fs.readFileSync('hi.txt', 'utf-8'));
// // fs.unlink('./hello.txt',function () {
    
// // })
// fs.mkdir('./newdir', (err) => {
//     if (err) {
//         console.log(`error`);
//     }
//     else {
//         process.chdir('./newdir')
//         fs.writeFile('./seyam.txt', 'semo', () => {
            
//         })
//     }
// })