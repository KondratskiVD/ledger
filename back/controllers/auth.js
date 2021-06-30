const express = require('express')
const router = express.Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const models = require("../models");

router.post ('/signup', async (req, res) => {
      await models.User.findOne({where: {email: req.body.email}})
      .then(user => {
        if(user) {
            res.send({message: 'User already exist', status: 400})
        } else {
            models.User.create({
                name: req.body.name,
                email: req.body.email,
                password: bcrypt.hashSync(req.body.password, 6)
              })
                .then(user => {
                    res.send({ message: "User was registered successfully!" });
                })
                .catch(err => {
                  res.status(500).send({ message: err.message });
                });
        }
    })
})

router.post ('/signin', async (req, res) => {
    await models.User.findOne({where: {email: req.body.email}})
    .then(user => {
      if(!user) {
        return res.status(404).send({ message: "User Not found." });
      } 

    const passwordIsValid = bcrypt.compareSync(
        req.body.password,
        user.password
    );

    if (!passwordIsValid) {
        return res.status(401).send({
          accessToken: null,
          message: "Invalid Password!"
        });
    }

    const token = jwt.sign({ id: user.id }, process.env.SECRET_KEY, {
        expiresIn: 86400 // 24 hours
    });

    res.status(200).send({
        id: user.id,
        name: user.name,
        email: user.email,
        accessToken: token
    });

  })
})

module.exports = router