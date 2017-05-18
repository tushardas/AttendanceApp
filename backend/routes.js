var Controllers= require("./controllers.js")

module.exports = function(app){
    app.options("/studentpercentage",function(res,req){
        Controllers.optionsController.handler(req,res);
    });

    app.post("/studentpercentage",function(res,req){
        Controllers.studperc.handler(req,res);
    });



}