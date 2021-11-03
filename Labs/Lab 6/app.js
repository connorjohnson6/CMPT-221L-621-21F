const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = 3000

app.set('view engine', 'ejs');
app.use(express.json());
app.use(express.urlencoded({extended: true}))


app.get("/", function(req, res){
    res.render('index');
})

app.post("/login", function(req, res){
    console.log(req.body.login);
    res.redirect('/')
})

app.get('/register', (req, res)=>{
    res.render('register')
})

app.post('/register', function(req, res){
            console.log(req.body.register);
            res.redirect('/register')
        
})



app.get('/index', (req, res)=>{
    res.render('index')
})

app.post('/index', (req, res)=>{
    
    res.redirect('/index')

})

app.listen(port, ()=> 
                    console.log("listening 3000"));