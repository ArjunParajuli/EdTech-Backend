
const adminMiddleware = (req, res, next) =>{
    const {uname, pw} = req.headers;

        if( (uname!==process.env.ADMIN_UNAME || pw!==process.env.ADMIN_PW) ){
            const err = new Error("Authentication failed!");
            err.statuscode = 401;
            next(err); 
        }else{
            next();
        }
}

export default adminMiddleware;