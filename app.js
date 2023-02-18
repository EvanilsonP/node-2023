const express = require('express');
const app = express();
const port = 3000;

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('index', { title: 'Home' });
});

app.get('/about', (req, res) => {
    res.render('about', { title: 'About'});
});

app.get('/blogs/create', (req, res) => {
    res.render('create', { title: 'Blogs create'});
});

app.use((req, res) => {
    res.render('404', { title: '404 - Not found'});
});

app.listen(port, () => { console.log(`Server running on port ${port}`) });