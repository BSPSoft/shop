const mongoose=require('mongoose');
mongoose.connect(
    'mongodb+srv://basheeralshamiry1144:1w2q3r4e5y6t@clustorshop.poj5f.mongodb.net/?retryWrites=true&w=majority&appName=clustorShop'
    //  // {
    //     al
    // }
).then(()=>{
    console.log('connected sucessfully');
}).catch(err=>{
    console.log(err);
})

module.exports=mongoose;