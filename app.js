const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const app = express();
const port = 8000;

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve static files from 'public'
app.use(express.static(path.join(__dirname, 'static', 'public')));
app.use(express.static(path.join(__dirname, 'static', 'public','html')));
app.use(express.static(path.join(__dirname, 'static', 'public','css')));
// app.use(express.static(path.join(__dirname, 'static', 'public','images')));
// Default route to serve home page
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'static', 'public', 'html', 'home.html'));
});

// POST routes

app.post("/index.js",async(req,res)=>
    {
        const User=require("./index.js");//("./static/index.js")
         const OrganDonation = require('./index.js');
    
        mongoose.connect('mongodb://127.0.0.1:27017/prashanth')
    .then(() =>{
        console.log("Database Connection done")
    }).catch(()=>{
        console.log("Connection failed")
    })
    
        const user=req.body  //whatever the data we are sending from html file will be save in user variable
        console.log(req.body);
        const data=new User(req.body)
        await data.save();
      //  await checkboxes.save();
        res.send("Thank you")
    });
    app.post("/index1.js",async(req,res)=>
    {
        const User1=require("./index1.js");//("./static/index.js")
    const  OrganDonors= require('./index1.js');
    
        mongoose.connect('mongodb://127.0.0.1:27017/vishal')
    .then(() =>{
        console.log("Database Connection done")
    }).catch(()=>{
        console.log("Connection failed")
    })
        const user=req.body  //whatever the data we are sending from html file will be save in user variable
        console.log(req.body);
        const data=new User1(req.body)
        await data.save();
      //  await checkboxes.save();
        res.send("Thank You");
    });
// Start server
app.listen(port, () => {
    console.log(`The application started successfully on port ${port}`);
});















// const express =require('express');
// const mongoose=require("mongoose");
// const path=require('path');
// const fs=require('fs')
// const app=express();
// const port=8000;
// app.use(express.urlencoded({extended:true}));
// app.use(express.json());
// //express specific stuff
// app.use(express.static('public'))
// // console.log(__dirname)
// // app.use(express.static(__dirname));  //for serving the static files
// app.use(express.urlencoded())//middleware1
// app.set('view engine','pug'); //set the template engine as pug
// app.set('views',path.join(__dirname,'views')) //set the views directory     
// app.get('/',(req,res)=>{
//     const params= {}
//     res.status(200).render('index.pug',params);
// })
// //actual post

// app.post("/index.js",async(req,res)=>
// {
//     const User=require("./static/index.js");//("./static/index.js")
//      const OrganDonation = require('./static/index.js');

//     mongoose.connect('mongodb://127.0.0.1:27017/prashanth')
// .then(() =>{
//     console.log("Database Connection done")
// }).catch(()=>{
//     console.log("Connection failed")
// })

//     const user=req.body  //whatever the data we are sending from html file will be save in user variable
//     console.log(req.body);
//     const data=new User(req.body)
//     await data.save();
//   //  await checkboxes.save();
//     res.send("Thank you")
// });
// app.post("/index1.js",async(req,res)=>
// {
//     const User1=require("./static/index1.js");//("./static/index.js")
// const  OrganDonors= require('./static/index1.js');

//     mongoose.connect('mongodb://127.0.0.1:27017/vishal')
// .then(() =>{
//     console.log("Database Connection done")
// }).catch(()=>{
//     console.log("Connection failed")
// })
//     const user=req.body  //whatever the data we are sending from html file will be save in user variable
//     console.log(req.body);
//     const data=new User1(req.body)
//     await data.save();
//   //  await checkboxes.save();
//     res.send("Thank You");
// });
// app.listen(port,()=>{
//     console.log(`the application started sucessfully on port ${port}`);
// })
