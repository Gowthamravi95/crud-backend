const express =require('express');
const cors =require('cors');
const app =express();
const mongoose =require('mongoose');

mongoose.connect("mongodb+srv://gowtham:0605199574@cluster0.ogf6xw3.mongodb.net/crud?retryWrites=true&w=majority",(err)=>{
    if(!err){
        console.log('db connected sucesfully')
    }
})

app.use(cors());
app.use(express.json());

app.use('/api',require('./router'))

app.listen(3005,()=>{
    console.log("server started")
})
