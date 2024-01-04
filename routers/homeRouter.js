const express = require('express');
const Router  = express.Router();
const homeSchema = require('../models/homeSchema');

Router.get('/',(err,res)=>{
    res.render('register',{title :'Fill form',password:'',email:''})
})

Router.post('/register',async(req,res)=>{
    try{
        const {
        name,
        address,
        phno,
        phnoo,
        email,
        nation,
        password,
        passwordc
    } = req.body;
    if(password === passwordc ){
        const userData = new homeSchema({
        name,
        address,
        phno,
        phnoo,
        email,
        nation,
        password
        })
        userData.save(err=>{
            if(err){
                console.log('Error')
            }else{
                res.render('register',{title :'Done',password:'',email:''})
            }
        })
    }
    else{
        res.render('register',{title :'',password:'Password not matching',email:''})
    }

    }catch(error){
        res.render('register',{title :'error in code',password:'',email:''})
    }
})

module.exports = Router;