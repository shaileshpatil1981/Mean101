var express = require('express');
var bodyParser = require('body-parser');
var mongoose=require('mongoose');
var app = express();
app.use(bodyParser.json());
app.use(express.static('public')); 
mongoose.connect('mongodb://localhost:27017/mittens');


var Meow = mongoose.model('Meow', {
 text: String
  });

  app.get('/meows',function(req,res,next){
    Meow.find({},function(err,meows){
      return res.json(meows);
    });
  })
  app.post('/meows', function(req, res, next){	
		var newMeow = new Meow({
			text: req.body.newMeow		
		});
		newMeow.save(function(err){
			return res.send("Added Successfully");
	});
  });

app.put('/meows/remove', function(req, res, next){	
var meowId=req.body.meow._id;		
		Meow.remove({_id: meowId}, function(err){
			return res.send("Deleted Successfully");
	});
});

var User=mongoose.model('User', { 
 username: String, password: String  });

 app.post('/users', function(req, res, next){		
			var newUser= new User({
				username: req.body.username,
				password: req.body.password
			});
			newUser.save( function(err){
			return res.send();
	});		
	}) ;	

app.listen(4000, function () {
  console.log('Example : Shailesh app listening on port 4000!')
});

