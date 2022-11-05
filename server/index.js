const express=require('express')
const app=express()
const mongoose=require('mongoose')
const shorturl=require('../model/shorturl')
mongoose.connect('mongodb://localhost/shortened',{
    useNewUrlParser: true,
	useUnifiedTopology: true
})
app.use(express.urlencoded({extends:false}))
app.get('/',async(req,res)=>{
    const ShortUrl=await shorturl.find()``
})
app.post('/shortUrl',async(req,res)=>{
    await shorturl.create({full:req.body.link})
    res.redirect('/')
})
app.listen(3000,()=>{
    console.log(`server started 3000`)
})