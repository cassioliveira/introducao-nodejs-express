const express = require('express');
const app  = express();
const port = 1233;

app.get('/', (req, res) => res.send('Olá Mundo fffff!'));

app.listen(port, () => console.log(`listening on port ${port}`));