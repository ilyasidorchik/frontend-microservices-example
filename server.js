'use strict';

const express = require('express');
const path = require('path');

const PORT = process.env.PORT || 8080;

const app = express();

// the __dirname is the current directory from where the script is running
app.use(express.static('dist'));

// send the user to index html page inspite of the url
app.get('*', (req, res) => {
  const filePath = path.join(__dirname, 'dist', 'index.html');

  res.sendFile(filePath);
});

app.listen(PORT);
