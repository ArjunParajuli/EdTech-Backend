import User from '../models/user.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

const userSignUp = async(req, res) =>{
    try{
        const {name, email, password} = req.body;
        const hashedPw = await bcrypt.hash(password, 10);

        const token = jwt.sign({email}, process.env.SECRET_KEY, {expiresIn: '1d'});

        const user = await User.create({name, email, password: hashedPw});
        res.status(201).json({user, token})
    }catch(err){
        res.status(400).json({msg: "Signup Failed", err: err.message})
    }
}

const userSignIn = async(req, res) =>{
    try{
        const { email, password } = req.body;
        const storedUser = await User.findOne({email});
        console.log(req.user)
        console.log(storedUser)
        if(!storedUser){
            throw new Error("User Not Found!");
        }
        const comparePw = await bcrypt.compare(password, storedUser.hashedPw);  
        console.log(comparePw)
        if(!comparePw){
            throw new Error("Password Not Correct!");
        }

        const token = jwt.sign({email}, process.env.SECRET_KEY)
        console.log(token)

        res.status(200).json({msg: "Signed In Successfully!"}, token)

    }catch(err){
        res.status(400).json({msg: err.message})
    }
}

export {userSignUp, userSignIn}