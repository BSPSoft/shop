const express=require('express');
const router=express.Router();
const mongoose=require('mongoose');

const Product=require('../models/Product');


router.get('/',async(req,res,next)=>{
   await Product.find()
    .select('_id name price Descripe ItemId img')
    .populate('ItemId','name _id')
    .exec()
    .then(docs=>{
      if(docs.length ===0){
        return res.status(404).json({
            message:"Product Not Found",
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

router.get('/:ItemId',async(req,res,next)=>{
   await Product.find({ItemId:req.params.ItemId})
    .select('_id name Descripe price img ItemId')
    .populate('ItemId','name _id')
    .exec()
    .then(docs=>{
      if(docs.length ===0){
        return res.status(404).json({
            message:"Product Not Found",
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
// get count product use ItemId

router.get('/:productId',(req,res,next)=>{
    const productId=req.params.productId;
    res.status(200).json({
        msg:productId
    })
});


router.post('/',(req,res,next)=>{
    const product=new Product({
        _id:new mongoose.Types.ObjectId(),
        ItemId:req.body.itemId,
        name:req.body.name,
        price:req.body.price,
        Descripe:req.body.descripe,
        img:req.body.img
    });

    product.save()
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