const express=require('express');
const bodyParser=require('body-parser');
const app=express();
app.use(bodyParser.json());
app.use(express.static('images'));


// connect mongoDB
const mongoDb=require('./connectDB');

const productRouter=require("./api/router/products");
const itemRouter=require("./api/router/items");



// Handling CORS error
app.use((req,res,next)=>{
    res.header("Access-Control-Allow-Origin","*");
    res.header("Access-Control-Allow-Headers","*");
    
    if(req.method==="OPTIONS"){
     res.header("Access-Control-Allow-Methods","POST,GET,PATCH,DELETE,PUT");
     return res.status(200).json({});
    }
    
    next();
})

// Hendling errors
app.use((error,req,res,next)=>{
    res.status(error.status || 500);
    res.status(404).json({
        error:{msgError:error.message}
    })
})



// Handling Requestes
app.use('/products',productRouter);
app.use('/items',itemRouter);


module.exports= app;