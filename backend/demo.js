var mysql = require('mysql');
var http = require('http');
var express = require('express');
var app = express();
var Controllers = require("./controllers.js");
var bodyParser = require('body-parser');
app.use(bodyParser.json());

var idc = 1; 
var con = mysql.createConnection({
	host: "localhost",
	user: "root",
	database: "proj"
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

app.get('/studentdetails', function (req, res) {
	res.header('Access-Control-Allow-Origin', '*')
	res.header('Access-Control-Allow-Credentials', true)
	res.header('Access-Control-Allow-Methods', 'POST, GET, PUT, DELETE, OPTIONS')
	res.header('Access-Control-Allow-Headers', 'Content-Type')
	console.log('dsfdsfd');
	givestud_details(req, res);
})

function givestud_details(req, res) {
	query = "select * from Student";
	con.query(query, function (err, result) {
		if (err) throw err;
		let response = [];
		for (let i = 0; i < result.length; i++) {
			response[i] = {
				regno: result[i].RegNo,
				name: result[i].Name,
				sem: result[i].Sem,
				phone: result[i].PhoneNumber,
				email: result[i].email,
				DepartmentName: result[i].DepartmentNumber,
				dummy: true
			}
		};

		console.log(response);
		res.end(JSON.stringify(response));

	})

	//res.writeHead(200, { 'Content-Type': 'text/html' });
	//res.end(response);
}

//Subjects Taken by a Particular Teacher
app.get('/subjecttaken', function (req, res) {
	res.header('Access-Control-Allow-Origin', '*')
	res.header('Access-Control-Allow-Credentials', true)
	res.header('Access-Control-Allow-Methods', 'POST, GET, PUT, DELETE, OPTIONS')
	res.header('Access-Control-Allow-Headers', 'Content-Type')
	give_subjecttaken(req, res);
})

function give_subjecttaken(req, res) {
	let id = req.url.slice(24);
	let ress = []
	quer = `select distinct(Courseid), totalclass as perc from Attendance where TeacherId = '${id}'`
	con.query(quer, function (err, res) {
		if (err) throw err;
		ress = res;
	})

	query = `select Course.Courseid, Course.CourseName, Course.Sem, Course.DepartmentNumber from Course where Course.CourseId in (select CourseId from Teaches where TeacherId='${id}')`;

	con.query(query, function (err, result) {
		if (err) throw err;
		let response = []
		for (let i = 0; i < result.length; i++) {
			response[i] = {
				name: result[i].CourseName,
				sem: result[i].Sem,
				total: ress[i].perc,
				id : result[i].Courseid
			}
		}
		
		res.end(JSON.stringify(response));
	})
	//res.writeHead(200, { 'Content-Type': 'text/html' });
}


//While Taking Attendance details of student of that sem has to be sent
app.get('/attendancetaken', function (req, res) {
	res.header('Access-Control-Allow-Origin', '*')
	res.header('Access-Control-Allow-Credentials', true)
	res.header('Access-Control-Allow-Methods', 'POST, GET, PUT, DELETE, OPTIONS')
	res.header('Access-Control-Allow-Headers', 'Content-Type')
	give_studdetails(req, res);
})

function give_studdetails(req, res) {
	let response = []
	query = "select RegNo, Name from Student where Sem = 6";
	con.query(query, function (err, result) {
		if (err) throw err;
			console.log(result);
		for (let i = 0; i < result.length; i++) {
			response[i] = {
				regno: result[i].RegNo,
				name: result[i].Name,
				dummy: true,
				id: 1
			}
		}
		res.end(JSON.stringify(response));

	})

	//res.writeHead(200, { 'Content-Type': 'text/html' });
}



//student percentage
app.get('/studentperc', function (req, res) {
	res.header('Access-Control-Allow-Origin', '*')
	res.header('Access-Control-Allow-Credentials', true)
	res.header('Access-Control-Allow-Methods', 'POST, GET, PUT, DELETE, OPTIONS')
	res.header('Access-Control-Allow-Headers', 'Content-Type')
	givestud_details(req, res);
})

function givestud_details(req, res) {
	regno = JSON.stringify(req.url).slice(20,30);
	query = `select distinct(Teacher.Name) , Teacher.TeacherId, Course.CourseName, Attendance.TotalAttended, Attendance.TotalClass, Attendance.TotalAttended/Attendance.TotalClass*100 as perc from Teacher,Teaches,Course, Attendance where Attendance.RegNo = '${regno}' and Attendance.CourseId = Course.CourseId and Teacher.TeacherId = Attendance.TeacherId`;
	con.query(query, function (err, result) {
		if (err) throw err;
		let response = [];
		for (let i = 0; i < result.length; i++) {
			response[i] = {
				subject: result[i].CourseName,
				name: result[i].Name,
				perc: result[i].perc,
				attended: result[i].TotalAttended,
				class: result[i].TotalClass,
				id: result[i].TeacherId
			}
		};
		res.end(JSON.stringify(response));

	})

	//res.writeHead(200, { 'Content-Type': 'text/html' });
	//res.end(response);
}

app.options('/submit', function (req, res) {
	res.header('Access-Control-Allow-Origin', '*')
	res.header('Access-Control-Allow-Credentials', true)
	res.header('Access-Control-Allow-Methods', 'POST, GET, PUT, DELETE, OPTIONS')
	res.header('Access-Control-Allow-Headers', 'Content-Type')
	console.log('dsfdsf');
	//res.writeHead(200, { 'Content-Type': 'application/json' });
	res.end();
})


app.post('/submit', function (req, res) {
	submit(req, res);
})
function submit(req, res) {
	console.log('sdfds');
	console.log(JSON.stringify(req.body));
	let body = req.body;
	for (let i = 0; i < body.length; i++) {
		if (body[i].dummy == true) {
			query = `update Attendance set TotalAttended=TotalAttended+1 where RegNo='${body[i].regno}' and CourseId='${idc}' and TeacherId='${body[i].id}'`;
			con.query(query, function (err, result) {
				if(result.affectedRows == 0){
					console.log("1")
					console.log(body[i].regno)
					query = `insert into attendance(RegNo,TeacherId,CourseId,Course_DepartmentNumber,TotalAttended,TotalClass) values('${body[i].regno}','${body[i].id}','${idc}','${body[i].department}',0,0)`	
					con.query(query,function(err,res){
						console.log("2")
						query = `select distinct(TotalClass) from attendance where CourseId = '${idc}' and RegNo = '${body[i].regno}'` 
						con.query(query,function(err,reso){
							console.log("3");
							query = `update attendance set TotalClass = '${reso.TotalClass}' where RegNo = '${body[i].regno}' and CourseId = '${idc}'`
						})
				})
			}
		})
		}
	}
	query = `update Attendance set TotalClass=TotalClass+1 where CourseId='${idc}' `;
	con.query(query, function (err, result) { })
	res.send();
}


//signup
app.options('/signup', function (req, res) {
	res.header('Access-Control-Allow-Origin', '*')
	res.header('Access-Control-Allow-Credentials', true)
	res.header('Access-Control-Allow-Methods', 'POST, GET, PUT, DELETE, OPTIONS')
	res.header('Access-Control-Allow-Headers', 'Content-Type')
	//res.writeHead(200, { 'Content-Type': 'application/json' });
	//res.end();
	res.end();
})


app.post('/signup', function (req, res) {
	res.header('Access-Control-Allow-Origin', '*')
	res.header('Access-Control-Allow-Credentials', true)
	res.header('Access-Control-Allow-Methods', 'POST, GET, PUT, DELETE, OPTIONS')
	res.header('Access-Control-Allow-Headers', 'Content-Type')
	signup(req, res);
})
function signup(req, res) {
	let response;
	body = req.body;
	console.log(req.body);
	query = `insert into users values('${body.username}','${body.password}','${body.regno}')`;
	con.query(query, function (err, result) {
		if (err) {
			response = [{ code: 0, result: "username already exists" }]
			//res.writeHead(200, { 'Content-Type': 'application/json' });
			console.log("Already exist");
			res.end(JSON.stringify(response));
		}
		else {
			console.log(body.department);
			query = `insert into student values('${body.regno}','${body.name}','${body.semester}','${body.contact}','${body.email}',1)`;
			con.query(query, function (err, result) {
				if (err) {
					query = `delete from users where username = '${body.name}'`;
					con.query(query);
					response = [{ code: 0, result: "UnSuccessful" }]
				}
				else {
					response = [{ code: 1, result: "Successful" }]
					console.log("Success");
			res.end(JSON.stringify(response));	
			}
			})
			
			//res.end();
		}
	})


}



//teachersignup
app.options('/teachersignup', function (req, res) {
	res.header('Access-Control-Allow-Origin', '*')
	res.header('Access-Control-Allow-Credentials', true)
	res.header('Access-Control-Allow-Methods', 'POST, GET, PUT, DELETE, OPTIONS')
	res.header('Access-Control-Allow-Headers', 'Content-Type')
	//res.writeHead(200, { 'Content-Type': 'application/json' });
	//res.end();
	res.end();
})


app.post('/teachersignup', function (req, res) {
	res.header('Access-Control-Allow-Origin', '*')
	res.header('Access-Control-Allow-Credentials', true)
	res.header('Access-Control-Allow-Methods', 'POST, GET, PUT, DELETE, OPTIONS')
	res.header('Access-Control-Allow-Headers', 'Content-Type')
	teachersignup(req, res);
})
function teachersignup(req, res) {
	let response;
	body = req.body;
	console.log(req.body);
	query = `insert into teachercred values('${body.username}','${body.password}','${body.teacherid}')`;
	con.query(query, function (err, result) {
		if (err) {
			response = [{ code: 0, result: "username already exists" }]
			//res.writeHead(200, { 'Content-Type': 'application/json' });
			console.log("Already exist");
			res.end(JSON.stringify(response));
			
		}
		else {
			query = `insert into Teacher values('${body.teacherid}','${body.name}','${body.email}','${body.department}')`;
			con.query(query, function(err,result){
				if(err){
					query = `delete from teachercred where username = '${body.username}'`
					con.query(query);
					throw err;	
				}

				else{
					console.log('Success');
					response = [{ code: 1, result: "Successful"}]
					res.end(JSON.stringify(response));
			}
			})
			
			
			//res.end();
		};
	})


}


//login

app.options('/login', function (req, res) {
	res.header('Access-Control-Allow-Origin', '*')
	res.header('Access-Control-Allow-Credentials', true)
	res.header('Access-Control-Allow-Methods', 'POST, GET, PUT, DELETE, OPTIONS')
	res.header('Access-Control-Allow-Headers', 'Content-Type')
	//(200, { 'Content-Type': 'application/json' });
	res.end();
})


app.post('/login', function (req, res) {
	res.header('Access-Control-Allow-Origin', '*')
	res.header('Access-Control-Allow-Credentials', true)
	res.header('Access-Control-Allow-Methods', 'POST, GET, PUT, DELETE, OPTIONS')
	res.header('Access-Control-Allow-Headers', 'Content-Type')
	login(req, res);
})
function login(req, res) {
	let resp;
	body = req.body;
	console.log(req.body);
	//query = `update Attendance set TotalAttended=TotalAttended+1 where RegNo='${body[i].regno}' and CourseId=1 `;
	query = `select username, RegNo from users where username = '${body.user}' and password = '${body.password}'`;
	con.query(query, function (err, result) {
		let resp;
		//console.log('username = ' + JSON.stringify(result[0].username));
		if (result.length == 0) {
			console.log('hehehehe');
			resp = [{ rep: "Username and password doesnt match" }];
			res.end(JSON.stringify(resp));

		}
		else {
			console.log('st');
			resp = [{
				user: result[0].username,
				regno: result[0].RegNo
			}];

			res.end(JSON.stringify(resp));

		}
	})
	//res.end();
}	






//logteacher

app.options('/logteacher', function (req, res) {
	res.header('Access-Control-Allow-Origin', '*')
	res.header('Access-Control-Allow-Credentials', true)
	res.header('Access-Control-Allow-Methods', 'POST, GET, PUT, DELETE, OPTIONS')
	res.header('Access-Control-Allow-Headers', 'Content-Type')
	//(200, { 'Content-Type': 'application/json' });
	res.end();
})
app.post('/logteacher', function (req, res) {
	res.header('Access-Control-Allow-Origin', '*')
	res.header('Access-Control-Allow-Credentials', true)
	res.header('Access-Control-Allow-Methods', 'POST, GET, PUT, DELETE, OPTIONS')
	res.header('Access-Control-Allow-Headers', 'Content-Type')
	logteacher(req, res);
})
function logteacher(req, res) {
	let resp;
	body = req.body;
	//query = `update Attendance set TotalAttended=TotalAttended+1 where RegNo='${body[i].regno}' and CourseId=1 `;
	query = `select username, teacherid from teachercred where username = '${body.user}' and password = '${body.password}'`;
	con.query(query, function (err, result) {
		let resp;
		//console.log('username = ' + JSON.stringify(result[0].username));
		if (result.length == 0) {
			console.log('hehehehe');
			resp = [{ rep: "Username and password not together" }];
			res.end(JSON.stringify(resp));

		}
		else{
			resp = [{
				user: result[0].username,
				teacherid: result[0].teacherid
			}];

			res.end(JSON.stringify(resp));

		}
	})
	//res.end();
}	



//returns details of a teacher
app.get('/teacherdetails', function (req, res) {
	res.header('Access-Control-Allow-Origin', '*')
	res.header('Access-Control-Allow-Credentials', true)
	res.header('Access-Control-Allow-Methods', 'POST, GET, PUT, DELETE, OPTIONS')
	res.header('Access-Control-Allow-Headers', 'Content-Type')
	console.log('dsfdsfd');
	giveteacher_details(req, res);
})

function giveteacher_details(req, res) {
	let n = req.url.slice(21)
	console.log(n);
	query = `select * from Teacher where TeacherId = '${n}'`;
	con.query(query, function (err, result) {
		if (err) throw err;
		console.log("result = " , result[0].Name,result[0].Email)
		let response = [{
				name: result[0].Name,
				email: result[0].Email
			}]
		console.log(response);
		res.end(JSON.stringify(response));

	})
}



//add subject taken by teacher specified by id in the req body
app.options('/addsub', function (req, res) {
	res.header('Access-Control-Allow-Origin', '*')
	res.header('Access-Control-Allow-Credentials', true)
	res.header('Access-Control-Allow-Methods', 'POST, GET, PUT, DELETE, OPTIONS')
	res.header('Access-Control-Allow-Headers', 'Content-Type')
	//res.writeHead(200, { 'Content-Type': 'application/json' });
	res.end();
})


app.post('/addsub', function (req, res) {
	res.header('Access-Control-Allow-Origin', '*')
	res.header('Access-Control-Allow-Credentials', true)
	res.header('Access-Control-Allow-Methods', 'POST, GET, PUT, DELETE, OPTIONS')
	res.header('Access-Control-Allow-Headers', 'Content-Type')
	addsub(req, res);
})
function addsub(req, res) {
	body = req.body;
	let id,response;
	let flag = 0;
	query = `select count(*) as count from Course where CourseName = "${body.name}"`;
	con.query( query, function(err, result){
		if((result[0].count) == 0){
			query = `insert into Course(CourseName,Sem,DepartmentNumber) values ("${body.name}","${body.semester}","${body.department}")`
			con.query(query , function(err,result){})
		}
		query = `select courseid from Course where CourseName = "${body.name}"`
		con.query(query, function(err,results){
			console.log(results[0].courseid)
			//console.log(id)
			query = `insert into teaches values("${results[0].courseid}","${body.department}","${body.id}")`
			con.query(query , function(err,result){
				if(err) throw err;
			})
				
				query = `select RegNo from student where sem = "${body.semester}"`
				con.query(query , function(err,result){
					for(let i=0;i<result.length;i++){
						query = `insert into attendance(RegNo,TeacherId,CourseId,Course_DepartmentNumber,TotalAttended,TotalClass) values("${result[i].RegNo}","${body.id}","${results[0].courseid}","${body.department}",0,0)`
						con.query(query,function(err,result){})
					}
					flag = 1;
					response = {
						message : "Successful"
					}	
				})
		})
			
			if(flag == 0){
		response = {
			message : "Unsuccessful"
		}
	}
	res.end(JSON.stringify(response))	
	}
		
	)
	response = {
						message : "Successful"
					}	
					res.end(JSON.stringify(response))	
}



//set idc

app.get('/set', function (req, res) {
	res.header('Access-Control-Allow-Origin', '*')
	res.header('Access-Control-Allow-Credentials', true)
	res.header('Access-Control-Allow-Methods', 'POST, GET, PUT, DELETE, OPTIONS')
	res.header('Access-Control-Allow-Headers', 'Content-Type')
	console.log('dsfdsfd');
	set(req, res);
})

function set(req, res) {
	idc = req.url.slice(14);
}