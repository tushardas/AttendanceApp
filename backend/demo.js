var mysql = require('mysql');
var http = require('http');
var express = require('express');
var app = express();
var Controllers= require("./controllers.js");
var bodyParser= require('body-parser');
app.use(bodyParser.json());
//var morgan = require('morgan');

var con = mysql.createConnection({
	host: "localhost",
	user: "root",
	password: "1014",
	database: "AttendanceProject"
});


con.connect(function (err) {

	if (err) throw err;
	console.log("Connected");

});


var server = app.listen(8081, function () {
   var host = server.address().address
   var port = server.address().port
   
   console.log("Example app listening at http://%s:%s", host, port)
})


//get requests

app.options('/studentdetails',function(req,res){
	console.log('options');
});

app.get('/studentdetails', function (req, res) {
	 res.header ('Access-Control-Allow-Origin', '*')
  res.header ('Access-Control-Allow-Credentials', true)
  res.header ('Access-Control-Allow-Methods', 'POST, GET, PUT, DELETE, OPTIONS')
  res.header ('Access-Control-Allow-Headers', 'Content-Type')
	console.log('dsfdsfd');
    givestud_details(req,res);
})

function givestud_details (req,res){
    query = "select * from Student";
	con.query(query,function(err,result){
	if(err) throw err;
	let response = [];
	for(let i=0;i< result.length;i++){
	response[i] = {
		regno : result[i].RegNo,
		name : result[i].Name,
		sem : result[i].Sem,
		phone : result[i].PhoneNumber,
		email : result[i].email,
		DepartmentName : result[i].DepartmentNumber,
		dummy : true
	}
};
	
	 console.log(response);
    res.end(JSON.stringify(response));
	        
    })
	
	res.writeHead(200, {'Content-Type': 'text/html'});
    //res.end(response);
}

//Subjects Taken by a Particular Teacher
app.get('/subjecttaken',function(req,res){
  res.header ('Access-Control-Allow-Origin', '*')
  res.header ('Access-Control-Allow-Credentials', true)
  res.header ('Access-Control-Allow-Methods', 'POST, GET, PUT, DELETE, OPTIONS')
  res.header ('Access-Control-Allow-Headers', 'Content-Type')
	give_subjecttaken(req,res);
})

function give_subjecttaken(req,res){
	console.log("Eureka!!!");
	let ress=[]
	quer = "select distinct(TotalClass) as perc from Student_attended_Course;"
	con.query(quer,function(err,res){
		if(err) throw err;
			ress=res;
	})
	
	query = "select Course.CourseName, Course.Sem from Course where Course.CourseId in (select CourseId from Teaches where TeacherId=1)";

	con.query(query,function(err,result){
	 if(err) throw err;
	 let response = []
	 console.log(response);
	 for(let i=0;i<result.length;i++){
		 response[i] = {
			 name: result[i].CourseName,
			 sem: result[i].Sem,
			 total: ress[i].perc,
		 }
	 }
    res.end(JSON.stringify(response));
	        
    })
	
	res.writeHead(200, {'Content-Type': 'text/html'});
}


//While Taking Attendance details of student of that sem has to be sent
app.get('/attendancetaken',function(req,res){
	res.header ('Access-Control-Allow-Origin', '*')
  res.header ('Access-Control-Allow-Credentials', true)
  res.header ('Access-Control-Allow-Methods', 'POST, GET, PUT, DELETE, OPTIONS')
  res.header ('Access-Control-Allow-Headers', 'Content-Type')
	give_studdetails(req,res);
})

function give_studdetails(req,res){
	console.log("Eurekagh!!!");
	let response=[]
	query = "select RegNo, Name from Student where Sem = 6";
	con.query(query,function(err,result){
	if(err) throw err;

	console.log(result);
    for(let i=0;i<result.length;i++){
		 response[i] = {
			 regno: result[i].RegNo, 
			 name: result[i].Name,
			 dummy: true
		 }
	 }
	res.end(JSON.stringify(response));
	        
    })
	
	res.writeHead(200, {'Content-Type': 'text/html'});
}



//student percentage
app.get('/studentperc', function (req, res) {
	 res.header ('Access-Control-Allow-Origin', '*')
  res.header ('Access-Control-Allow-Credentials', true)
  res.header ('Access-Control-Allow-Methods', 'POST, GET, PUT, DELETE, OPTIONS')
  res.header ('Access-Control-Allow-Headers', 'Content-Type')
	console.log('dsfdsfd');
    givestud_details(req,res);
})

function givestud_details (req,res){
    query = "select distinct(Teacher.Name) , Course.CourseName, Student_attended_Course.TotalAttended, Student_attended_Course.TotalClass, Student_attended_Course.TotalAttended/Student_attended_Course.TotalClass*100 as perc from Teacher,Teaches,Course, Student_attended_Course where Student_attended_Course.RegNo = '14GAEC9062' and Student_attended_Course.CourseId = Course.CourseId and Teacher.TeacherId = Student_attended_Course.TeacherId";
	con.query(query,function(err,result){
	if(err) throw err;
	let response = [];
	for(let i=0;i< result.length;i++){
	response[i] = {
		subject : result[i].CourseName,
		name : result[i].Name,
		perc : result[i].perc,
		attended: result[i].TotalAttended,
		class : result[i].TotalClass
	}
};
	
	 console.log(response);
    res.end(JSON.stringify(response));
	        
    })
	
	res.writeHead(200, {'Content-Type': 'text/html'});
    //res.end(response);
}

app.options('/submit',function(req,res){
	res.header ('Access-Control-Allow-Origin', '*')
  res.header ('Access-Control-Allow-Credentials', true)
  res.header ('Access-Control-Allow-Methods', 'POST, GET, PUT, DELETE, OPTIONS')
  res.header ('Access-Control-Allow-Headers', 'Content-Type')
  console.log('dsfdsf');
  res.writeHead(200, {'Content-Type': 'application/json'});
  res.send();
})


app.post('/submit',function(req,res){
  submit(req,res);
})
function submit(req,res){
		console.log('sdfds');
		console.log(JSON.stringify(req.body));
		let body = req.body;
	for(let i = 0;i<body.length;i++){
		if(body[i].dummy == true){
			query = `update Student_attended_Course set TotalAttended=TotalAttended+1 where RegNo='${body[i].regno}' and CourseId=1 `;
			con.query(query,function(err,result){})
	}
	}
query = `update Student_attended_Course set TotalClass=TotalClass+1 where CourseId=1 `;
con.query(query,function(err,result){})
	

}

	//update Student_attended_Course set TotalAttended=TotalAttende