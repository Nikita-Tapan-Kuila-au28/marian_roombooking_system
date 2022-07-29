const router=require('express').Router();
const path=require('path');
//const {isAuth}=require('../middleware')
const {getlogin,postlogin,postsignup,getsignup,getrooms}=require('../controller/admincontroller');


router.get('/login',getlogin)//getlogin request
router.post('/login',postlogin)
router.get('/login/getrooms',getrooms)//postlogin 


router.get('/signup',getsignup)
router.post('/signup',postsignup)





module.exports=router;