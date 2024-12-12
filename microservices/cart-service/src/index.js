const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('Cart Service');
});

app.listen(port, () => {
    console.log(`Cart service listening at http://localhost:${port}`);
});

