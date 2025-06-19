const jwt = require('jsonwebtoken')
const User = require('../api/models/users')
const { verifyJwt } = require('../config/jwt')

const isAuth = async (req, res, next) => {
  try {
    const authHeader = req.headers.authorization

    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return res
        .status(401)
        .json({ message: 'Authorization header missing or malformed' })
    }

    const token = authHeader.split(' ')[1]
    const { id } = verifyJwt(token)

    const user = await User.findById(id)

    if (!user) {
      return res
        .status(401)
        .json({ message: 'User not found or no longer exists' })
    }
    user.password = undefined
    req.user = user
    next()
  } catch (error) {
    console.error('Auth error:', error.message)
    return res
      .status(401)
      .json({ message: 'Not authorized..Invalid or expired token.' })
  }
}

const isAdmin = (req, res, next) => {
  try {
    const user = req.user

    if (!user) {
      return res.status(401).json({ message: 'Not authenticated' })
    }

    if (user.role !== 'admin') {
      return res
        .status(403)
        .json({ message: 'Only admins can perform this action' })
    }

    next()
  } catch (error) {
    console.error('isAdmin error:', error.message)
    return res.status(500).json({ message: 'Internal server error' })
  }
}

module.exports = { isAuth, isAdmin }
