let express = require('express');
let router = express.Router();
let Student = require("../models/student");

router.get("/student", function(req, res){
    res.render('index')
})

router.post("/student", function(req, res){

    Student.create(req.body.student, function (err, student) {
        console.log(req.body.student);
        if (err){
            console.errror(err);
        }else {
            console.log(student)
            res.redirect('/student/student');
            
        }
    })

})

module.exports = router;