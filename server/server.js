var express = require("express");
var http    = require("http");
var fs = require("fs");
var path = require("path");
var bodyParser = require ("body-parser");
var mysql = require("mysql");
var app = express();
app.use( bodyParser.json() );
app.use( bodyParser.urlencoded({
	extended: true
	})
);
// Middleware to load static files
app.use( express.static( __dirname  + '/../client' ) );


app.post('/signup/', function(req, res){
  var details = {};
  var response = {};
  details.username = req.body.uname;
  details.password = req.body.pass;
  details.cname = req.body.cname;
  details.rnumber = req.body.rnumber;
  var mysql = require("mysql");
  var con = mysql.createConnection({
      host: "localhost",
      user: "root",
      password: "",
      database: "college"
  });
  con.connect();
  var post={
    uname : details.username,
    password : details.password,
    college : details.cname,
    rnumber : details.rnumber
  }
  console.log(post.rnumber);
  con.query('INSERT INTO user_detail SET ?',post,function(err,rows){
    if(err) throw err;
    console.log('Data received from Db:\n');
  });
  response.statusDetails = "Success";
  response.statusCode = "200";
  console.log(response);
  res.send(details);
});


app.post('/login/', function(req, res){
	var details = {};
	var response = {};
	details.username = req.body.username;
	details.password = req.body.password;
	var mysql = require("mysql");
 	var con = mysql.createConnection({
  		host: "localhost",
  		user: "root",
  		password: "",
  		database: "college"
	});
 	con.connect();
 	var post={
 		uname : details.username,
 		password : details.password
 	}
 	con.query('select uname from user_detail where uname=?',post.uname, function (error,result)
    {
       if(error)
       {
         console.error(error);
       }
       else
       {
         if(result.length>0)
         {
           con.query('select password from user_detail where password=?',details.password, function (error,result)
          {
             if(error)
             {
               console.error(error);
             }
             else
             {
               if(result.length>0){
               console.log('Succesfull login');
               res.send("1");
               }
               else{
                 console.log('check password');
                 res.send("0");
               }
             }
         	});
           }
           else{
           console.log('UnSuccesfull Login');
           res.send("2");
           }
         }
       }); 
});

app.post('/indexdetails', function(req, res){
	var details = {};
  details.name=req.body.cname;
  var mysql = require("mysql");
  var con = mysql.createConnection({
      host: "localhost",
      user: "root",
      password: "",
      database: "college"
  });
  con.connect();
  con.query('select name from colleges where name=?',details.name, function (error,result){
     if(error)
       {
         console.error(error);
       }
       else{
          if(result.length>0){
            res.send("0");
          }
          else{
            res.send("1");
          }
       }
       
     });
});

app.get('/placement/:sample', function(req,res){
  var sample1=req.params.sample;
  var mysql = require("mysql");
  var con = mysql.createConnection({
      host: "localhost",
      user: "root",
      password: "",
      database: sample1
  });
  con.connect();
  con.query('select * from placement', function (error,result){
    if(error){
      console.error(error);
    }
    else{
      if(result.length>0){  
        res.send(result);
      }
      else{
        res.send("failure");
      }
    }
  });
});

app.get('/infra/:sample', function(req,res){
  var sample1=req.params.sample;
  var mysql = require("mysql");
  var con = mysql.createConnection({
      host: "localhost",
      user: "root",
      password: "",
      database: sample1
  });
  con.connect();
  con.query('select * from infra', function (error,result){
    if(error){
      console.error(error);
    }
    else{
      if(result.length>0){  
        res.send(result);
      }
      else{
        res.send("failure");
      }
    }
  });
});

app.get('/hostel/:sample', function(req,res){
  var sample1=req.params.sample;
  var mysql = require("mysql");
  var con = mysql.createConnection({
      host: "localhost",
      user: "root",
      password: "",
      database: sample1
  });
  con.connect();
  con.query('select * from hostel', function (error,result){
    if(error){
      console.error(error);
    }
    else{
      if(result.length>0){  
        res.send(result);
      }
      else{
        res.send("failure");
      }
    }
  });
});

app.get('/update/:sample/:dataval/:upload', function(req,res){
  var details={};
  details.sample1=req.params.sample;
  details.sample2=req.params.dataval;
  details.sample3=req.params.upload;
  console.log(details.sample3);
  var mysql = require("mysql");
  var con = mysql.createConnection({
      host: "localhost",
      user: "root",
      password: "",
      database: details.sample1
  });
  con.connect();
  var post={
    details : details.sample2
  };
  con.query('INSERT INTO '+details.sample3+' SET ?',post,function(err,rows){
    if(err) throw err;
    console.log('data Inserted into DB');
  });
  res.send({statusDetails : "Success", statusCode : "200"});
});

app.get('/', function(req, res){
	res.sendFile(path.resolve('../client/index.html'));
});

app.listen(9001, function() {
   console.log('Express server listening on port 9001');
} );
