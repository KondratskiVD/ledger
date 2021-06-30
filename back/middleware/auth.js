const jwt = require('jsonwebtoken')

module.exports = (req, res, next) => {
  try {
    const authHeader = req.headers.authorization
    const token = authHeader?.split(' ')[1]
    req.authTokenData = jwt.verify(
      token,
      process.env.SECRET_KEY
    )
    next()
  } catch {
    res.status(401).json({
      error: new Error('Invalid request!'),
    })
  }
}
