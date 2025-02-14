const express = require("express");
const router = express.Router();
const User = require("../models/user.js");
const wrapAsync = require("../utils/wrapAsync.js");

router.use(express.urlencoded({ extended: true }));

router.get("/signup", (req, res)=>{
    res.render("users/signup.ejs");
})

router.post("/signup", wrapAsync(async(req, res)=>{
    try{
        let {username, email, password} = req.body;
        let newUser = new User({email ,username});
        const registeredUser = await User.register(newUser, password);
        // console.log(registeredUser);
        // req.flash("Success", "welcome to wanderlust");
        res.redirect("/listings");
    } catch(e){
        req.flash("Error", e.message);
        res.redirect("/signup");
    }    
}));

module.exports = router; // Export the router so it can be used in other files