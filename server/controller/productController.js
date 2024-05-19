import productModel from "../models/productModel.js";

export const createProducts = (req,res) =>{
    console.log("ncjfdsbvdsvbdsjbvjjk")
    try{
       const {title,price,details,image} = req.body;
       if(!title || !price || !details || !image) {
        res.status(401).json('fill all the products fields')


       }
      
       const product = new productModel({
        title,
        price,
        details,
        image
       })

       product.save();
       res.status(200).json(product)

    }
     
    catch(err){
        console.log(err);
        res.status(500).json('Error when creating products')
    }
}

export const getProducts = async(req,res) =>{
  try{
     const products = await productModel.find();
     res.status(200).json(products)


  }catch(err){
     console.log(err);
     res.status(500).json('Error when getting products')
  }
}