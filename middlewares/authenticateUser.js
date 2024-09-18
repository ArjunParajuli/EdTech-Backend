import jwt from 'jsonwebtoken'

const authenticateUser = async(req, res, next) =>{
    try{
        const authHeader = req.headers.authorization;
        const token = authHeader.split(' ')[1]
        const payload = jwt.verify(token, process.env.SECRET_KEY);
        // console.log(payload);
        if(!payload) throw new Error("Invalid token!")
        
        req.user = payload;
        next();

    }catch(err){
        console.log("In Catch", err.message)
        res.status(401).json({msg: "Authentication Failed!", msg: err.message})
    }
}

export default authenticateUser