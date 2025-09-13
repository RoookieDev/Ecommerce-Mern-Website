const express = require("express")
const session = require('express-session')
const cookieParser = require('cookie-parser')
const mongoose = require('mongoose')
const aut = require('./middelware/Auth')

const cors= require('cors')

// extra
const bodyParser = require('body-parser');
const router = express.Router();
const app = express()
// connect-mongo
const MongoStore = require('connect-mongo')

// JWT
const jwt = require('jsonwebtoken')

// ENV FILE
require('dotenv').config()


// CORS CONFIG
app.use(cors({
    origin:["http://localhost:5173"],
    methods:["POST","GET"],
    credentials:true

}))

// extra
app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));
app.use(express.json())




// MongoDatabase and Schema
let URI = process.env.MONGO_URL

// models call
const userTable = require('./modals/userModal');
const sessionTable = require('./modals/sessionModel')
const imageTable = require('./modals/imageModals');
const cartTable = require('./modals/cartModel')
const auth = require("./middelware/Auth")
mongoose.connect(URI)

// mongostore
const sessionStorage = MongoStore.create({
mongoUrl:URI,
collectionName:'sessions',
ttl:14*24*60*60,
autoRemove:'native'
})

// SESSION CONFIG
app.use(session({
    secret: 'sessionData',
  resave: false,
  saveUninitialized: false,
  rolling:true,
  maxAge:1000*60*60*24,
  cookie:{
    secure:false,
    maxAge:3000
  },
  store:sessionStorage
}))


// sending session on frontend 
app.get("/sessionData",(req,res)=>{
    if(req.session.userEmail){
        userTable.findOne({email:req.session.userEmail})
        .then(user=>{
            return res.json({valid:true, userEmail:user.name})
        })
    }
    else{
        return res.json({valid:false})
    }
})


// Login:Accessing/Getting data
router.post("/api/login", async(req,res)=>{
   try {
     const{email,password} = req.body;
     const user = await userTable.findOne({email})
     if(!user) return res.json({msg:"E"})
     const isMatched = user.password == password;
     if(!isMatched) return res.json({msg:"0"})
        const secretKey = 'USERAUTH'
        const token =jwt.sign(
            {userId:user._id, userEmail:user.email},
            process.env.JWT_SECRET || secretKey,
            {expiresIn:'1hr'})
            req.session.userEmail =user.email;
             res.json({msg:"1", userData:req.session.userEmail, tokenData:token}) 
    
    
    
   } catch (error) {
    res.status(500).json({msg:error})
   }
})



// Inserting Data using 
router.post('/api/register', async (req,res)=>{
     const{name,email,password} = req.body;
    userTable.findOne({email:email})
    .then(user=>{
        if(user){
            if(user.email == email){
                res.json({msg:"d"})
                return false
            }
        }
        else{
             userTable.create(req.body)
            .then(user => res.json({msg:"1"}))
            .catch(err => res.json(err))
            }
    })
    console.log(email)
})


// image uploading
router.post("/upload-image", async (req,res)=>{
 const {base64} =req.body;
    try{
        imageTable.create({image:base64});
        res.send({Status:"ok"})
    }
    catch(error){
        res.send({Status:"erroe", data:error});
    }
    res.send("red")
})
app.use(router)

// USING AUTHURIZATION



// decoding token

const tokenData= (userToken) =>{
   const sessionData = jwt.verify(userToken, process.env.JWT_SECRET)
   return sessionData;
}



// Authentication
app.use(aut)

// add to cart api
app.post("/api/addtocart", async (req,res)=>{
    const {productId, tokenId} = req.body
    let email = tokenData(tokenId)
    const userEmail = email.userEmail
    cartTable.findOne({product_name:productId})
    .then(productUser=>{
        if(productUser){
          if(productUser.userEmail = userEmail){
            const count = productUser.quantity
            cartTable.updateOne({$and:[{userEmail:userEmail}, {product_name:productId}]},{$set:{quantity:count+1}})
            .then(result => res.send({msg:"u"}))
          }
        }
        else{
        cartTable.create({
        userEmail:userEmail,
        product_name:productId,
        quantity:1
    })
    .then(data=> res.send({msg:"a"}))
    .catch(err=> res.send({error:err, msg:"Try Again"}))
        }
    })
    .catch(error => res.send(error))
})


// getName for session
app.post("/api/JWTToken", async(req,res)=>{
    const {token} = req.body;
    const userData = tokenData(token)
    const id = userData.userId
    userTable.findOne({_id:id})
    .then(data=> res.send({name:data.name, email:data.email}))
    .catch(err=> res.json(err))  
})


// get CartData
// app.post("/api/getCartItem", (req,res)=>{
//     const {token,productId} = req.body;
//     const active_user_data = tokenData(token).userEmail;
//     cartTable.findOne({userEmail:active_user_data})
//     .then(userCart=>{
//         if(userCart){
//             if(userCart.product_name==productId){
//                 res.send({msg:'E',id:productId})
//             }
//         }
//         else{
//             res.send({msg:'NE'})
//         }
//     })
//     .catch(err=> res.send(err))
//     // res.send({msg:token,data:active_user_data.userEmail})
// })







app.listen(3001,()=>{
    console.log("running");
})