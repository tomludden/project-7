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
artistRouter.post('/', [isAdmin], postArtist)
artistRouter.put('/:id', [isAdmin], updateArtist)
artistRouter.delete('/:id', [isAdmin], deleteArtist)

module.exports = artistRouter
