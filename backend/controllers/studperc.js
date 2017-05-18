module.exports = {
    handler: function givestud_details (req,res){
	console.log('sdfnfl');
    query = "select * from Department where DepartmentName like \"%r%\""
	con.query(query,function(err,result){
	if(err) throw err;
	// for(let i=0;i< result.length;i++)
	
	console.log("Result = " + result[0].DepartmentId);        
    })

	res.writeHead(200, {'Content-Type': 'text/html'});
    res.end('Stud');
}
}