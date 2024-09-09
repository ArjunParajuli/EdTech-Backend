
const adminMiddleware = async(req, res, next) =>{
    const {uname, pw} = req.headers;

        if( (uname!==process.env.ADMIN_UNAME || pw!==process.env.ADMIN_PW) ){
            throw new Error("Authentication failed!")
        }else{
            next();
        }


}

export default adminMiddleware;