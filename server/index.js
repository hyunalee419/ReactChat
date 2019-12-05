const path = require('path');

const express = require('express');

const app = express();
const port = process.env.PORT || 3005;

app.use(express.static(path.join(__dirname,'../dist')));
app.use(express.static(path.join(__dirname,'../images')));

app.get('*', (req, res) => {
  res.sendFile('public/index.html', { root: '.' });
});

app.listen(port, () => {
  console.log(`Running on http://localhost:${port}/`);
});
