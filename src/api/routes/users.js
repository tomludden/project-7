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

userRoutes.get('/', [isAuth, isAdmin], getUsers)
userRoutes.get('/:id', [isAuth, isAdmin], getUser)
userRoutes.put('/:id', [isAuth, isAdmin], updateUser)
userRoutes.post('/register', register)
userRoutes.post('/login', login)
userRoutes.delete('/:id', [isAuth, isAdmin], deleteUser)

module.exports = userRoutes
