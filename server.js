'use strict'
const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.static('./public'));
app.get('/new.html', function(request, response){
  response.sendFile('new.html', {root: './public'});
})
app.get('/index.html', function(request, response){
  response.sendFile('index.html', {root: './public'});
})
app.get('*', function(request, response){
  console.log('New request', request.url);
  response.sendFile('404.html', {root: './public'});
})
app.listen(PORT, function(){
  console.log('server is up and running. and can be accessed at localhost:5000');
})
