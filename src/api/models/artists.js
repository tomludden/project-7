const mongoose = require('mongoose')

const artistSchema = new mongoose.Schema(
  {
    artist: { type: String, required: true },
    img: { type: String, required: true },
    paintings: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Painting' }]
  },
  { timestamps: true }
)

const Artist = mongoose.model('Artist', artistSchema, 'artists')

module.exports = Artist
