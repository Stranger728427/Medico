import mongoose from 'mongoose';
import bcrypt from 'bcrypt';

const userSchema = mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    role:{type:String, required:true, default:'user'},
    
});

userSchema.pre('save', async function (next) {
    try {
        this.password = await bcrypt.hash(this.password, 10);
        next();
    } catch (error) {
        next(error);
    }   
});


const userModel = mongoose.model("User", userSchema);



export default userModel;
