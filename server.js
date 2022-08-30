const express = require ('express');

const PORT = 3001;

const app = express();

app.use(express.static('public'));

app.get('/', (req,res) =>
    res.sendFile(path.join(__dirname, '/public/index.html'))
);

app.get('/notes', (req,res) =>
    res.sendFile()
);

app.get('/api/notes', (req,res) =>
    console.info(`GET /api/reviews`)
);

app.post('/api/notes', (req,res) =>
    console.info(`GET /api/reviews`)
);

app.listen(PORT, () =>
    console.log(`App listening at http://localhost:${PORT} 🚀`)
);