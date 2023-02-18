const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.sendFile('./views/index.html', { root: __dirname });
});

app.get('/about', (req, res) => {
    res.sendFile('./views/about.html', { root: __dirname });
});

app.get('/blogs/create', (req, res) => {
    res.sendFile('./views/create.html', { root: __dirname });
});

// 404
app.use((req, res) => {
    res.status(404).sendFile('./views/404.html', { root: __dirname });
});



app.listen(port, () => { console.log(`Server running on port ${port}`) });