const express = require('express');

const app = express();

app.use((req, res, next) =>
{
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, PATCH, DELETE, OPTIONS")
    next();
})
app.use('/api/posts', (req, res, next) => {
    const postsList = [
        {
            id: 'a-01', title: 'first post', content: 'this first post created in server'           
        },
        {
            id: 'a-02', title: 'second post', content: 'this is a second dummy post'
        },
        {
            id: 'a-03', title: 'third post', content: 'continue publishing dummy posts'
        }
    ];
    res.status(200).json({
        message: 'Posts from server',
        posts: postsList
    })
})

module.exports = app;
