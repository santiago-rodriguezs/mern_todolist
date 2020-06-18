const User = require('../models/User');

const controller = {
    getUsers: async (req, res) => {
        const users = await User.find();
        res.json(users);
    },
    createUser: async (req, res) => {
        const newUser = new User({
            username: req.body.username,
        });
        await newUser.save();
        res.json({message: 'User created'});
    },
    deleteUser: async (req, res) => {
        await User.findByIdAndDelete(req.params.id);
        res.json({message: 'User deleted'});
    }
};

module.exports = controller;