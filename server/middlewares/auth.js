import jwt from 'jsonwebtoken';
import userModel from '../models/userModel.js';

export const auth = (req, res, next) => {

 const token = req.headers.cookie;
 console.log(token)


  if (!token) {
    return res.status(401).send({ error: 'Access denied. No token provided.' });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    console.log(decoded)
    req.user = decoded;
    //console.log('auth')
   
   next();

  } catch (error) {
    res.status(400).send({ error: 'Invalid token.' });
  }
};

 
//Admin
export const isAdminAuthenticated = (req,res,next)=>{
    auth(req,res,()=>{
       if(req.user.role!=='admin'){
        
        return res.status(404).json({
            error:'You are not authorized to access admin route'
        })
       }
       res.status(200).send({
        message:'Admin Access '
       })
       console.log("admin access granted")
       next()
        
    
    })
}

// Seller
export const isSellerAuthenticated = (req,res,next)=>{
  auth(req,res,()=>{
     if(req.user.role!=='seller'){
      return res.status(404).json({
          error:'You are not authorized to access seller route'
      })
     }
     res.status(200).send({
      message:'Seller Access '
     })
     console.log("seller access granted")
      
     next()
  })
}




