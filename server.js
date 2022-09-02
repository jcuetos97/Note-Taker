// Dependencies
const express = require ('express');
const path = require ('path');
const api = require('./routes/apiRoute.js');

// Port declared
const PORT = process.env.PORT || 3001;

const app = express();

// Express middleware functions
app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// 
app.use('/api', api);

// Sends notes.html file when request method GET /notes 
app.get('/notes', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/notes.html'))
);

// Sends index.html file when request method GET *
app.get('*', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/index.html'))
);


// App listener: starts server
app.listen(PORT, () =>
    console.log(`App listening at http://localhost:${PORT} 🚀`)
);