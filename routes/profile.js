module.exports = function(app){
    app.post("/api/dashboard", function(req,res){
        
    })
    app.get("/api/dashboard", function(req, res){
        console.log(req.body)
    });
}