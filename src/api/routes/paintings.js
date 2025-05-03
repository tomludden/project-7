const { isAuth, isAdmin } = require('../../middlewares/auth')

const {
  getPaintings,
  postPainting,
  updatePainting,
  deletePainting,
  getPaintingsUnverified,
  getPainting
} = require('../controllers/paintings')

const paintingRouter = require('express').Router()

paintingRouter.get('/:id', getPainting)
paintingRouter.get('/', getPaintings)
paintingRouter.get('/unverified', [isAdmin], getPaintingsUnverified)
paintingRouter.post('/', [isAuth], postPainting)
paintingRouter.put('/:id', [isAdmin], updatePainting)
paintingRouter.delete('/:id', [isAdmin], deletePainting)

module.exports = paintingRouter
