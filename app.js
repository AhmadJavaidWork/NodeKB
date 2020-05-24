const express = require('express');
const path = require('path');


// Init App
const app = express();

// Load View Engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// Home Route
app.get('/', (req, res) => {
  let articles = [
    {
      id: 1,
      title: 'Article One',
      author: 'Ahmad Javaid',
      body: 'This is article one'
    },
    {
      id: 2,
      title: 'Article Two',
      author: 'John Does',
      body: 'This is article two'
    },
    {
      id: 1,
      title: 'Article Three',
      author: 'Jacob',
      body: 'This is article three'
    }
  ];
  res.render('index', {
    title: 'Articles',
    articles: articles
  });
});

// Add Route
app.get('/articles/add', (req, res) => {
  res.render('add_article', {
    title: 'Add Article'
  });
});



// Start Server
app.listen(3000, () => {
  console.log('Server started on port 3000...')
})