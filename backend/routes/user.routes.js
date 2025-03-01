import express from "express";

const router=express.Router()
router.get('/testi'  ,(req,res)=>{

    const javad=process.env.TEST
    res.status(200).send('Usessr route')
})
//req=request res=response  
export default router