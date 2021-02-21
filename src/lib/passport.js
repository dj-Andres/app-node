const passport = require('passport');
const localStrategy = require('passport-local').Strategy;

passport.use('local.signup', new localStrategy({
    usernameField:'Usuario',
    passwordField:'Password',
    passReqToCallback:true
},async(req,username,password,done)=>{   
    console.log(req.body);
}));

//passport.serializeUser((user,donde)=>{

//});