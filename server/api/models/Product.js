const mongoose=require('mongoose');

const productSchema=new mongoose.Schema({
    _id:mongoose.Schema.Types.ObjectId,
    ItemId:{type:mongoose.Schema.Types.ObjectId,ref:"Item"},
    name:{type:String,required:true},
    Descripe:{type:String},
    price:{type:Number,required:true},
    img:{type:String}
});

module.exports=mongoose.model("Product",productSchema);