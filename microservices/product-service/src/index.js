const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('Product Service');
});

app.listen(port, () => {
    console.log(`Product service listening at http://localhost:${port}`);
});

