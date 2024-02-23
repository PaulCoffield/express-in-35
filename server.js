const express = require('express');
const app = express();

app.set('view engine', 'ejs');

app.get('/', (req, res) =>{
  console.log('Here');


  // Send status code
  // res.sendStatus(500);

  // Send status code and chain message in text
  // res.status(500).send('Hi');
  
  // Send status code and chain message in json
  // res.status(500).json({"message":"Error"});

  // Send just json
  // res.json({"message":"Error"});
  
  // Send file to be downloaded
  // res.download('server.js') //path to file to be downloaded

  // Send page to be rendered
  // res.render('index.ejs');

  // Send page to be rendered and chain extra data to be used
  res.render('index.ejs', { text:"world 🌍"});

})

app.listen(3000);