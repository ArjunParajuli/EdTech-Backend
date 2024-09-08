
const adminMiddleware = async(req, res) =>{
    const {username, password} = req.body;

        if(username !== process.env.ADMIN_UNAME || password !== process.env.ADMIN_PW){
            throw new Error("Authentication failed!")
        }else{
            next();
        }


}

export default adminMiddleware;