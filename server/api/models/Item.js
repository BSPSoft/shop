const mongoose=require("mongoose");

const ItemSchema=new mongoose.Schema({
     _id:mongoose.Schema.Types.ObjectId,
     name:{type:String,required:true},
});

module.exports=mongoose.model("Item",ItemSchema);