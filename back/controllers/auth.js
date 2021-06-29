const express = require('express')
const router = express.Router();
const bcrypt = require('bcrypt');
const db = require("../models");

router.post ('/signup', async (req, res) => {
    const user = await db.User.findOne({where: {email: 'demo@demo.com'}})
    console.log(user);
    res.send({message: user, status: 400})
    //   await User.findOne({email: req.body.email})
    //   .then(user => {
    
    //     if(user) {
    //         res.send({message: 'User already exist', status: 400})
    //         return
    //       }
    //   })
    

    //   User.create({
    //     name: req.body.name,
    //     email: req.body.email,
    //     password: bcrypt.hashSync(req.body.password, 8)
    //   })
    //     .then(user => {
    //         res.send({ message: "User was registered successfully!" });
    //     })
    //     .catch(err => {
    //       res.status(500).send({ message: err.message });
    //     });
    })

module.exports = router