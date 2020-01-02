const express = require('express');
const path = require('path');

const port = process.env.PORT || 4260;
const app = express();

const destinationDir = path.join(__dirname,'../dist');

//hosting from dist folder

app.use(express.static(destinationDir));
console.log(`express hosting from ${destinationDir}`);

app.get('*', (req, res) => {
    res.sendfile(path.join (destinationDir,'index.html'));
});
console.log(`serving index.html`);

// Initialize app and listen to port

app.listen(port,() => console.log(`server is runing from ${port}`));