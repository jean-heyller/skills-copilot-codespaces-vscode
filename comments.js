// Create web server application
// Run: node comments.js
// Access: http://localhost:3000
// Access: http://localhost:3000/comments
// Access: http://localhost:3000/comments/1
// Access: http://localhost:3000/comments/2
// Access: http://localhost:3000/comments/3
// Access: http://localhost:3000/comments/4

var express = require('express');
var app = express();

app.use(express.static('public'));

var comments = [
  {id: 1, author: "Pete Hunt", text: "This is one comment"},
  {id: 2, author: "Jordan Walke", text: "This is *another* comment"},
  {id: 3, author: "John Doe", text: "This is a comment from John Doe"},
  {id: 4, author: "Jane Doe", text: "This is a comment from Jane Doe"}
];

app.get('/', function(req, res) {
  res.send('Hello World!');
});

app.get('/comments', function(req, res) {
  res.json(comments);
});

app.get('/comments/:id', function(req, res) {
  var comment = comments.filter(function(comment) {
    return comment.id == req.params.id;
  });
  res.json(comment[0]);
});

var server = app.listen(3000, function() {
  console.log('Example app listening at http://localhost:3000');
});