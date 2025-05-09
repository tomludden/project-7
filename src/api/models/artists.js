const mongoose = require('mongoose')

const artistSchema = new mongoose.Schema(
  {
    artist: { type: String, required: true },
    img: { type: String, required: true },
    paintings: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Painting' }]
<<<<<<< HEAD
=======

    /* paintings: [
      {
        type: String,
        required: true,
        enum: [
          'Vincent van Gogh',
          'Salvador Dalí',
          'Pablo Picasso',
          'Leonardo da Vinci',
          'Edvard Munch',
          'Grant Wood',
          'Johannes Vermeer',
          'Gustav Klimt',
          'Rembrandt',
          'Claude Monet',
          'Frida Kahlo',
          'Georges Seurat',
          'John Everett Millais',
          'Wassily Kandinsky'
        ]
      }
    ] */
>>>>>>> 532082a9d0811e0d34a9d12cc5b3f5a7152e68e1
  },
  { timestamps: true }
)

const Artist = mongoose.model('Artist', artistSchema, 'artists')

module.exports = Artist
