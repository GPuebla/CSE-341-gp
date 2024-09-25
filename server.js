// express web server
const express = require('express');
const app = express();
 
app.get('/', (req, res) => {
  res.send("Hello Guy");
});

app.get('/bye', (req, res) => {
  res.send("Bye my friend");
});
 
const port = 3000;

app.listen(process.env.PORT || port, () => {
  console.log('Web Server is listening at port ' + (process.env.PORT || port));
});