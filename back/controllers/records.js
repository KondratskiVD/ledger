const express = require('express')
const router = express.Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const models = require("../models");

router.get ('/', async (req, res) => {
    await models.Record.findAll({where: {userId: 1}})
    .then(records => {
        if(records) {
            res.status(200).send({records});
        }
    })
})

module.exports = router