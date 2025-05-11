const User = require('../models/users')
const bcrypt = require('bcrypt')
const { generateSign } = require('../../config/jwt')

const getUsers = async (req, res, next) => {
  try {
    const users = await User.find()
    return res.status(200).json(users)
  } catch (error) {
    return res.status(400).json({ message: 'Error getting users' })
  }
}

const getUser = async (req, res, next) => {
  try {
    const { id } = req.params
    const user = await User.findById(id)
    return res.status(200).json(user)
  } catch (error) {
    return res.status(400).json({ message: 'User not found' })
  }
}

const updateUser = async (req, res, next) => {
  try {
    const updatedUser = await User.findByIdAndUpdate(
      req.params.id,
      { role: req.body.role },
      { new: true }
    )
    return res.status(200).json({
      message: 'User updated',
      user: updatedUser
    })
  } catch (err) {
    res.status(400).json({ message: 'User not updated' })
  }
}

const register = async (req, res, next) => {
  try {
    const { username, password } = req.body

    const duplicateUser = await User.findOne({ username })
    if (duplicateUser) {
      return res
        .status(400)
        .json({ message: 'User already exists, choose another name' })
    }

    const newUser = new User({
      username,
      password,
      role: 'user'
    })

    const savedUser = await newUser.save()
    return res.status(200).json(savedUser)
  } catch (error) {
    return res.status(400).json({ message: 'User not created' })
  }
}

const login = async (req, res, next) => {
  try {
    const { username, password } = req.body

    const user = await User.findOne({ username })

    if (!user) {
      return res.status(400).json({ message: 'User not found' })
    }

    if (bcrypt.compareSync(password, user.password)) {
      const token = generateSign(user._id)
      return res.status(200).json({ user, token })
    }
  } catch (error) {
    return res.status(400).json({ message: 'Not authorised, token needed' })
  }
}

const deleteUser = async (req, res, next) => {
  try {
    const { id } = req.params
    const deletedUser = await User.findByIdAndDelete(id)
    return res.status(200).json({
      message: 'User deleted',
      user: deletedUser
    })
  } catch (error) {
    return res.status(400).json({ message: 'User not deleted' })
  }
}

module.exports = {
  getUsers,
  getUser,
  updateUser,
  deleteUser,
  register,
  login
}
