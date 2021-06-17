var express = require('express');
const passport = require('passport')
let router = express.Router();

const User = require('../models/User');

//login route
router.post('/login',
    passport.authenticate('local'),
    (req, res)=> {
        res.json(req.user)
  }
);

//if user is logged in, passport will attach the user directly to the request
router.get('/loggedInUser', (req, res)=>{
    console.log('Returning logged in user as:', req.user)
    res.json(req.user)//will send 200 with json content
})

//logout route
router.get('/logout', (req, res)=>{
    req.logout()
    res.sendStatus(200)
})

module.exports = router;
