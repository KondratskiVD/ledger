const express = require('express')
import {asyncHandler} from '../middleware/async'
const User = require('../models/user')
const router = express.Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
import { validationResult } from 'express-validator'

import { USER_EXIST,
    USER_NOT_FOUND,
    USER_NOT_VERIFIED,
    WRONG_EMAIL_PASSWORD,
    WRONG_VERIFICATION_CODE } from '../utils/errors'

export const register = asyncHandler(async (req, res, next) => {

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return next(errors.array()[0].msg)
    }

    const {email, password, name} = req.body
    const candidate = await User.findOne({where: {email}})
    if (candidate) {
        return next(USER_EXIST)
    }

    const hashedPassword = await bcrypt.hash(password, 12)
    User.create({
        email,
        password: hashedPassword,
        name
    })
    .then(user => {
        let token = jwt.sign(user.dataValues, process.env.SECRET_KEY, {expiresIn: 1440})
        res.json({token, auth: true, user})
    })

})
