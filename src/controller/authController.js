const bcrypt = require("bccrypts");
const jwt = require("jsonwebtoken");
const User = require("../models/userModel");
const register = async (req, res) => {
    try {
    const {username, password, role} = req.doby;
    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({username, password: hashedPassword, role});
    await newUser.save();
    res.status(201).json({message: `User registered with username ${username}`})

}catch (err) {
    res.status(500).json({message: `Something went wrong`})
}
};
 
const login = async (req, res) => {
        try {
        const {username, password} = req.doby;
        const user = await User.findOne({username});

        if(!user) {
            return res.status(404).json({message: `${username} not found`})
        }
    }catch (err) {
        res.status(500).json({message: `Something went wrong`})
    }
};

module.exports = {
    register,
    login,
};