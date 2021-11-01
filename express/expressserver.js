const express = require('express');
const path = require('path');

const app = express ();
app.listen('4000', () => {
    console.log("Listening at Port 4000");
});

app.get('/', (req, res) => { 
   res.sendFile('http_server/htmlPages/main.html', {root : path.join(__dirname,'/..')})
})
app.get('/about', (req, res) => { 
   res.sendFile('http_server/htmlPages/about.html', {root : path.join(__dirname,'/..')})
})
//redirect in express
app.get('/about-me', (req, res) => { 
    res.redirect('/about');
})
app.get('/contact', (req, res) => { 
   res.sendFile('http_server/htmlPages/contact.html', {root : path.join(__dirname,'/..')})
})
//base page in express, handled via middleware
app.use((req, res) => { 
   res.status(404).sendFile('http_server/htmlPages/404.html', {root : path.join(__dirname,'/..')})
})


