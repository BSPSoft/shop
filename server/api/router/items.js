const express=require('express');
const router=express.Router();
const mongoose=require('mongoose');

const Item=require('../models/Item');

router.get('/',(req,res,next)=>{
     Item.find()
         .select('name _id')
         .exec()
         .then(docs=>{
           if(docs.length ===0){
             return res.status(404).json({
                 message:"Item Not Found",
             });
           }
     
           res.status(200).json(docs);
         })
         .catch(err=>{
             res.status(500).json({
                 error:err.message
             })
         })
});

router.post('/',(req,res,next)=>{
    const item=new Item({
        _id:new mongoose.Types.ObjectId(),
        name:req.body.name,
    });

    item.save()
    .then(result=>{
        res.status(201).json(result);
    })
    .catch(err=>{
        res.status(500).json({
            error:err.message
        })
    })
})

module.exports=router;