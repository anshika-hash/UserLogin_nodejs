const express = require('express');
const mongoose = require('mongoose');
const hbs = require('hbs');
const db = require('./db/conn')
const path = require('path');
const app = express();
//const register = require('./models/register');
const Data = require('./models/register');
const port = process.env.PORT || 3000
////////////////////Without hbs
 //const static_path = path.join(__dirname,"../public");
 //app.use(express.static(static_path));

app.use(express.json());
app.use(express.urlencoded({extended:false}));
////////////////////Handle Bar 
const patrials_path = path.join(__dirname,"../views");
hbs.registerPartials(patrials_path);
app.set('view engine','hbs');
//app.set('views','views');

app.get('/',(req,res)=>{
    res.render('index');
})
////////////////////////////////

app.get('/',(req,res)=>{
    res.send('Hello From The Dark Side');
})

app.get('/home',(req,res)=>{
    res.render('home');
})

app.get('/profile',(req,res)=>{
    res.render('profile');
})

app.get('/contact',(req,res)=>{
    res.render('contact');
})
/////////////////////////////////////////post
app.post('/register',async(req,res)=>{
    try{
        console.log(req.body.email);
        console.log(req.body.password);
        console.log(req.body.address);
        console.log(req.body.city);
        console.log(req.body.state);
        console.log(req.body.zip);
       // res.send(req.body);
        const saveData = new Data({
            email:req.body.email,
            password:req.body.password,
            address:req.body.address,
            city:req.body.city,
            state:req.body.state,
            zip:req.body.zip

        })
        //saveData.save();
        const registered = await saveData.save();
       // res.status(201).render('register');
       res.send(req.body);

    }catch(e){
        console.log(e);
    }
})
/////////////////////////////////////
app.listen(3000,()=>{
    console.log(`PORT ${port}`)
})
