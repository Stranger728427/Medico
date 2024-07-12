import productModel from "../models/productModel.js";


// Creating new Products
export const createProducts = (req,res) =>{
   
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

//Getting products

export const getProducts = async(req,res) =>{
  try{
     const products = await productModel.find();
     res.status(200).json(products)


  }catch(err){
     console.log(err);
     res.status(500).json('Error when getting products')
  }
}


//Products Deleting
export const deleteProducts = async(req,res)=>{
   try{
      const id = req.params.id;
      await productModel.findByIdAndDelete(id);
      res.status(200).json('Product deleted successfully');

   }
   catch(err){
      console.log(err);
      res.status(500).json('Error when deleting products')
   }
}

//Product Editing

export const updateProducts = async(req,res)=>{
   try{
      const id = req.params.id;
      const {title,price,details,image} = req.body;
      const product = await productModel.findByIdAndUpdate(id,{title,price,details,image},{new:true});
      res.status(200).json({
         product,
         message:'Product updated successfully',
         success:true

      });

   }
   catch(err){
      console.log(err);
      res.status(500).json('Error when updating products')
   }
}
