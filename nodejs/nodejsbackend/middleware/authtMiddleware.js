const jwt = require("jsonwebtoken");
const User = require("../models/userModel");

const auth = async (req, res, next) => {
  try {  
    
    const token = req.header("Authorization").replace("Bearer ", "");
    console.log(jwt.verify(token, "secretkey"));
    

    const result = jwt.verify(token, "secretkey");
    req.user = await User.findById(result._id);


    next();
  } catch (error) {
   // next({name:"JsonWebTokenError", message:"Oturum Süresi Dolmuş Durumda"});
  res.status(401).json({status : 401,message:"Oturum süreniz dolmuştur."});
   //next(error)
  }
};

module.exports = auth;
