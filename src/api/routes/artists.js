const { isAdmin } = require('../../middlewares/auth')

const {
  getArtists,
  postArtist,
  updateArtist,
  deleteArtist,
  getArtist
} = require('../controllers/artists')

const artistRouter = require('express').Router()

artistRouter.get('/:id', getArtist)
artistRouter.get('/', getArtists)
artistRouter.post('/', [isAuth, isAdmin], postArtist)
artistRouter.put('/:id', [isAuth, isAdmin], updateArtist)
artistRouter.delete('/:id', [isAuth, isAdmin], deleteArtist)

module.exports = artistRouter
