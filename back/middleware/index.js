const jwt = require('jsonwebtoken')
import { asyncHendler } from './async'
import { NOT_AUTHORIZED, AUTHORIZATION_DENIED } from '../utils/errors'

export const verifyToken = asyncHendler(async (req, res, next) => {
    const authHeader = req.headers.authorization
    const token = authHeader?.split(' ')[1]
    if (!token) return next(NOT_AUTHORIZED)

    await jwt.verify(token, process.env.TOKEN_SECRET, (err, user) => {
        if (err) return next(AUTHORIZATION_DENIED)
        req.user = user
        next()
    })
})
