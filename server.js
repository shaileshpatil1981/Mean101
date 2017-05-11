var express = require('express');
var bodyParser = require('body-parser');
var mongoose=require('mongoose');
var app = express();
app.use(bodyParser.json());
app.use(express.static('public'));

mongoose.connect('mongodb://localhost:27017/mittens');

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/mittens');

var Meow = mongoose.model('Meow', {
  text: string
});

app.get('/meows', function(req,res,next){
  Meow.find({}, function(err, meows){
    return res.json(meows);
  });

  
app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
});

});

