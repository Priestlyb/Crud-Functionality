const router = require("express").Router();
const User = require("../models/Users");
const bcrypt = require('bcrypt');

//REGISTER
router.post("/register", async (req, res) =>{
    try{
        const salt = await bcrypt.genSalt(10);
        const hashedPAss = await bcrypt.hash(req.body.password, salt);
        const newUser = new User({
            username: req.body.username,
            email: req.body.email,
            password: hashedPAss,
        });

        const user = await newUser.save();
        res.status(200).json(user);
    } catch(err){
        res.status(500).json(err);
    }
})

//LOGIN

router.post("/login", async (req, res) => {
    try {
        const user = await User.fondOne({ username: req.body.username });
        !user && res.status(400).json("Wonrg Username");
        
        const validated = await bcrypt.compare(req.body.password, user.password);
        !validated && res.status(400).json("Wrong password");

        const { password,...others } = user._doc;

        res.status(200).json(others)
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;