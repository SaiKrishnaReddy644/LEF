const express = require('express')
const app = express();

app.set('view engine','ejs')
app.use(express.static('public'))
app.get('/',(req,res)=>{
    res.render('index.ejs');
});

app.get('/login',(req,res)=>{

});


app.get('/signup',(req,res)=>{

});


app.listen(3000,()=>{
    console.log("app is running on port 3000")
});