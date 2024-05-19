import mongoose from "mongoose";

const connectDB = async (uri) =>{
    const DbOptions = {
        dbName:"Shopify_Db"
    }

    try{
       await mongoose.connect(uri,DbOptions)
       console.log("Database is connected successfully")
    }catch(err){
        console.log("An error occured by connection Database");
        res.status(401).json("err occured in database connection")
    }
}

export default connectDB;