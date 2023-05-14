const express =require('express');
const morgan= require('morgan');
const nodemon = require('nodemon');
const app= express();
const path = require('path');
const { setEngine } = require('crypto');

//ejs rakheko
app.set("view engine","ejs");

//path set gareko
app.use(express.static('public'));
app.use(express.static(__dirname +'/public/'+'/image/'));

// morgan(middle-ware)
app.use(morgan('tiny'));
app.get('/',(req,res)=>{
    res.render('homepage');
})

//port define gareko
const PORT= process.env.PORT||4000
app.listen(PORT,()=>{
    console.log("the server start at"+PORT);
});