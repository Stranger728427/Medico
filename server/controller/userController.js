import userModel from "../models/userModel.js";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';


 export const userRegister = async (req, res) => {
   
    try {
        const { username, email, password, confirmpassword, role } = req.body;
        
        if (!username || !email || !password || !confirmpassword || !role) {
            return res.status(400).json({
                message: "Please fill all fields",
                status:400,
            });
        }
        const isExistEmail = await userModel.findOne({ email }).select('password').select('confirmpassword');
   
        if(password!==confirmpassword) res.status(404).json({
            status:404,
            message: "Passwords do not match",
            status:404,

        })

        if (isExistEmail) {
            return res.status(400).send('Email already exists');
        } 
        
            const newUser = new userModel({
                username,   
                email,
                password,
                confirmpassword,
                role,
                
            });

            const user = await newUser.save();

             console.log(user);

            return res.status(201).json({
                success:true,
                status:201,
                message:'User created successfully',
                user:{
                    _id:user._id,
                    name:username,
                    email:user.email,
                    role:user.role,
                    
                }
                
            });

        
    } catch (err) {
        console.error(err);
        return res.status(500).send('An error occurred while creating the user');
    } 
};

export const userLogin = async (req, res) => {
    try {
        const { email, password, role } = req.body;
        if (!email || !password || !role) {
            return res.status(400).send({
                status:400,
                success:false,
                message:'Please provide email and password',
                data:null
            });
        }
        const user = await userModel.findOne({ email });

        if (!user) {
            return res.status(400).send({
                status:400,
                success:false,
                message:'User does not exist',
            });
        } else {
            
            const isPasswordMatch = await bcrypt.compare(password, user.password);
             
            if (!isPasswordMatch) {
                return res.status(401).send({
                    status:401,
                    success:false,
                    message:'Invalid password or email',
                    data:null
                });
            } 

            const token = jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET, { expiresIn: '24h' });

            const cookieName = (user.role === "admin") ? "adminToken" : "userToken";
            res.cookie(cookieName, token, {
              httpOnly: true,
              secure: process.env.NODE_ENV === 'production',
            });
            
            res.status(200).send({
              status:200,
              success: true,
              message: `${user.role} logged in successfully`,
              data: {
                token,
                user: {
                  _id: user._id,
                  name: user.name,
                  email: user.email,
                  role: user.role,
                }
              }
            });
            
        }
    } catch (err) {
        console.error(err);
        return res.status(500).send('An error occurred while logging in user');
    }
};

export const userLogout = async (req, res) => {
  try {
    res.clearCookie('jwtToken', {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict',
    });

    return res.status(200).json({ message: 'Logged out successfully' });
  } catch (err) {
    console.error('Logout error:', err);
    return res.status(500).json({ error: 'Logout error' });
  }
};



export const deleteUser = async(req,res)=>{
    try{
        const user = await userModel.findByIdAndDelete(req.params.id);
        if(!user){
            return res.status(404).send({
                success:false,
                message:'User not found',
                data:null
                });
                }
                res.status(200).send({
                    success:true,
                    message:'User deleted successfully',
                    data:null
                })
            }
            catch(err){
                console.error(err);
                return res.status(500).send('An error occurred while deleting user');
            }
}

//Edit user details

export const updateUser = async(req,res)=>{
    try{
        const user = await userModel.findByIdAndUpdate(req.params.id,req.body,{new:true});
        if(!user){
            return res.status(404).send({
                success:false,
                message:'User not found',
                data:null
            })
    }
    res.status(200).send({
        message:'user updated successfully',
        data:user,
        success:true
    })

}
catch(err){
    console.error(err);
    return res.status(500).send('An error occurred while updating user');
}

}