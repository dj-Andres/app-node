const express = require('express');
const router = express.Router();
const sql = require('../database');
const passport = require('../lib/passport');

router.get('/signup',(req,res)=>{
    res.render('auth/signup')
});


router.post('/signup',(req,res)=>{
    passport.authenticate('local.signup',{
        successRedirect:'/profile',
        failureRedirect:'/signup',
        failureFlash:true
    });

    res.send('recivido');
    //const { nombre,usuario,password } = req.body;
    //console.log(req.body);
    /*const newUser ={
        nombre,
        usuario,
        password
    };
    sql.query('INSERT INTO usuario',[newUser]);
    res.redirect("/auth");*/
});

router.get('/profile',(req,res)=>{
    res.send('recividox3');
});

module.exports = router;