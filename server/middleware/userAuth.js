import jwt from 'jsonwebtoken';

const userAuth =async (req,res,next)=>{
     const {token}=req.cookies;

     if (!token) {
        return res.json({success:false,message:'Not Authorised. Login Again'});  
     }
     try {
        
        const tokenDecode=jwt.verify(token,process.env.JWt_SECRET);

        if (tokenDecode.id) {
          //gpt
          req.body = req.body || {};
            req.body.userId =tokenDecode.id
        }else{
            return res.json({success:false,message:'Not Authorised. Login Again'});  
        }

        next();

     } catch (error) {
        return res.json({success:false,message:error.message});  

     }
}

export default userAuth;