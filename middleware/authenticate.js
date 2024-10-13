const isAuthenticated= (req,res,next)=>{
    if(req.session.user ===undefined){
        return res.status(401).json("qlq el mioooo")
    }
    next();
};
module.exports ={ isAuthenticated}