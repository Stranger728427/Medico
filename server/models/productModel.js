import mongoose from "mongoose";

const ProductSchema = mongoose.Schema({
    title:{type:String, required:true},
    price:{type:Number, required:true},
    deatails:{type:String, required:true},
    image:{type:String,required:true}
})

const productModel = mongoose.model('Product',ProductSchema);

export default productModel;