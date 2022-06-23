const express = require('express')
const app = express();

app.get('/', (req, res) => {
    res.send('Hello World');
});

app.get('/api/courses', (req,res) => {
    res.send([1,2,4]);
});

const data = require('./exployees.json')

app.get('/api/employees', (req,res) => {
    //res.header("status", 'success');
    //res.send(JSON.stringify(data));
    res.json(data);
});

app.listen(3000, () => console.log('Listening on port 3000...'));