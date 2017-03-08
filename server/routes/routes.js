var fs     = require("fs");
var mysql   = require("mysql");
var config  =require("./config.js");
var routes ={};
console.log('script working');
routes.login=function(req,res) {
	var userInfo={};
	var response={};
console.log('hi');
	try
	{
    userInfo.Register_Num = req.params.register_num;
    userInfo.Password = req.params.password;
var connection = mysql.createConnection({
	host:'localhost',
	user:'root',
	password:'root',
	database:'projectdb'
});
connection.connect(function(error){
	if(!!error){
		console.log('Error connecting to database');
	}
	else{console.log('Database connected');}
});
var flag;
var logins={
register_num:req.params.register_num,
password:req.params.password
};
/*connection.query('insert into login set ?',logins,function(err,result){
if(err){console.error(err);}
else{console.error(result);console.log('User values added');}
});*/

connection.query('select register_num from user_info where register_num=?',logins.registernum, function (error,result)
{
	if(error)
	{
console.error(error);
	}
 else
 {
 	if(result.length>0)
 	{
 	connection.query('select password from user_info where password=?',logins.password, function (error,result)
 	{
 	if(error)
 		{
 			console.error(error);
 		}
 		else
 		{
 			if(result.length>0){
 			console.log('Succesfull login');}
 		
 		else{console.log('check password');}
 	}});
}
else
{console.log('Username invalid..please signup');}
}
});	
 	


 /*fs.appendFile(config.details, JSON.stringify(userInfo), function(err) {
    if (err) throw err;
      console.log('User info added!');
    });
      response.responseMessage = 'success';
      response.responseStatus  = 200; 
      console.log(response);
      res.send(response);*/
}
  catch(err) {
    console.log('Server error:', err);
          response.responseMessage = 'Internal server error';
          response.responseStatus  = 500; 
      res.send(response);
  }

	};
routes.defaultPage = function(req, res) {
 res.send('Error: 404, Page not found :-(');
};
routes.searchColl = function(req,res) {
	var college_info={};
	console.log('search function');
	try
	{
    college_info.college_name = req.params.college_name;
    var connection = mysql.createConnection({
	host:'localhost',
	user:'root',
	password:'root',
	database:'projectdb'
});
connection.connect(function(error){
	if(!!error){
		console.log('Error connecting to database');
	}
	else{console.log('Database connected');}
});
connection.query('select college_name from college_info where college_name=?', college_info.college_name,function(err, result) {
 if (err) {
  console.error(err);
 } else {
  console.log(result);
  console.log('College found');
 }
});
}
catch(err) {
    console.log('Server error:', err);
          response.responseMessage = 'Internal server error';
          response.responseStatus  = 500; 
      res.send(response);
  }
};

module.exports = routes;
