const userRoutes = require('express').Router()

const { isAdmin, isAuth } = require('../../middlewares/auth')

const {
  getUsers,
  getUser,
  updateUser,
  deleteUser,
  register,
  login
} = require('../controllers/users')

userRoutes.get('/', [isAdmin], getUsers)
userRoutes.get('/:id', [isAdmin], getUser)
userRoutes.put('/:id', [isAdmin], updateUser)
userRoutes.post('/register', register)
userRoutes.post('/login', login)
userRoutes.delete('/:id', [isAdmin], deleteUser)

module.exports = userRoutes
