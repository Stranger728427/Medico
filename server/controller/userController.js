import userModel from "../models/userModel.js";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';


 export const userRegister = async (req, res) => {
   
    try {
        const { name, email, password, role } = req.body;
        if (!name || !email || !password || !role) {
            return res.status(400).send('Please fill all the fields');
        }
        const isExistEmail = await userModel.findOne({ email });

        if (isExistEmail) {
            return res.status(400).send('Email already exists');
        } else {
            const newUser = new userModel({
                name,
                email,
                password,
                role,
                
            });
            const user = await newUser.save();

            console.log(user);

            return res.status(201).send({
                success:true,
                message:'User created successfully',
                user:{
                    _id:user._id,
                    name:user.name,
                    email:user.email,
                    role:user.role,
                    
                }
            });

        }
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
                success:false,
                message:'Please provide email and password',
                data:null
            });
        }
        const user = await userModel.findOne({ email });

        if (!user) {
            return res.status(400).send({
                success:false,
                message:'User does not exist',
            });
        } else {
            
            const isPasswordMatch = await bcrypt.compare(password, user.password);
             

            if (!isPasswordMatch) {
                return res.status(401).send({
                    success:false,
                    message:'Invalid credentials',
                    data:null
                });
            } 

            const token = jwt.sign({ id: user._id, role:user.role}, process.env.JWT_SECRET, { expiresIn: '1h' });
            console.log("REAL TOKEN "+token)
            res.cookie(`${user.role}`,token)

             res.status(200).send({
                success:true,
                message:`${user.role} logged in succesfully`,
                data:{
                    token,
                    user:{
                        _id:user._id,
                        name:user.name,
                        email:user.email,
                        role:user.role,
                   }
                }
             });    
        }
    } catch (err) {
        console.error(err);
        return res.status(500).send('An error occurred while logging in user');
    }
};
