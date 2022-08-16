//install express using npm
const express = require('express');

//for parsing incoming requests
//install body-parser using npm
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const postsRoutes = require("./routes/posts");

const app = express();

mongoose.connect('mongodb+srv://rabi:4a5XfsdyokS49l3q@cluster0.m9dqg.mongodb.net/posts-db?retryWrites=true&w=majority')
.then(()=> {
    console.log('Connected to database');
})
.catch(()=>{
    console.log('Connection failed');
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use((req, res, next) =>
{
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, PATCH, PUT, DELETE, OPTIONS")
    next();
})
//password: 4a5XfsdyokS49l3q

app.use(postsRoutes);

module.exports = app;
