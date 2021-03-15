const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 8080 ;

const BuildPath = path.join(__dirname,'..', 'build');

app.use(express.static(BuildPath));

app.get('*', function (req, res) {
  res.sendFile(path.join(BuildPath, 'index.html'));
});

app.listen(port,()=>{
    console.log(`server is up at ${port} !`);
})