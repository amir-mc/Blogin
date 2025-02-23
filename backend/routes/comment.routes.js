import express from "express";

const router=express.Router()
router.get('/testi'  ,(req,res)=>{
    res.status(200).send('User route')
})
//req=request res=response 
export default router