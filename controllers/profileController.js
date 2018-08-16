var express = require('express');

var router = express.router();

var db = require('../models');

var axios = require('axios');


router.get("/dashboard", function(req, res){
    axios.get("/api/user_data").then(function(request, response){
        if(!req.user){
            res.json({})
        }
        else{
            res.json({
                email: req.user.email,
                id: req.user.id
            })
        }
        console.log("test",res.user)
    }).catch(function(error){
        if (error) throw error
    });
});