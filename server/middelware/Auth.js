const jwt = require('jsonwebtoken')
const userTable = require('../modals/userModal');

const auth = async (req,res,next) =>{
    try {
        const bearerHeader = req.headers['authorization']
        if(typeof bearerHeader != 'undefined'){
            const token = bearerHeader.split(' ')[1];
            const user = jwt.verify(token, process.env.JWT_SECRET)
            // console.log(user)
            req.token = user
            console.log(user)
            next()
        }
        else{
             res.status(401).json({msg:"No token"})   
        }
    } catch (error) {
        res.status(403).json({msg:"Invalid"})   
    }
}

module.exports = auth