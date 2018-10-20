const express = require('express');
const app = express();
const path = require('path');

app.use(express.static(__dirname + '/dist/rollings'));

app.get('/*', function(req,res) {
  res.sendFile(path.join(__dirname+'/dist/rollings/index.html'));
});

app.listen(process.env.PORT || 8080);

console.log('Server is listening');
