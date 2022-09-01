const api = require('express').Router();
const path = require ('path');
const fs = require ('fs');
var uniqid = require('uniqid');


api.get('/notes', (req,res) => {
    console.log(`${req.method} request received.`);
    res.sendFile(path.join(__dirname, "../db/db.json"));
});

api.post('/notes', (req,res) => {
    console.log(`${req.method} request received.`);
    let database = JSON.parse(fs.readFileSync('./db/db.json', "utf8")); 

    let userNote = {
        title: req.body.title,
        text: req.body.text,
        id: uniqid(),
    };
    
    database.push(userNote);
    fs.writeFileSync('./db/db.json', JSON.stringify(database))
    console.log(database);
    res.json(database);

});

api.delete('/notes/:id', (req,res) => {
 
    let database = JSON.parse(fs.readFileSync('./db/db.json', "utf8")); 

    if (req.params.id) {
        const id = req.params.id;
    }
    
    database.push(userNote);
    fs.writeFileSync('./db/db.json', JSON.stringify(database))
    console.log(database);
    res.json(database);

});




module.exports = api;