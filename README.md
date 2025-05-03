# Artists & Paintings API (with Users)

## Project Overview
This project is a **REST API** for managing **artists** and their **paintings**. It allows users to:
- **Retrieve** a list of artists and paintings, and also if they are Authorised users to **add** to the lists,
 and Authorised Users (Admins) to:
- **Create, Read, Update, and Delete** artists, paintings and Users. **(CRUD)**
- Establish **relationships** between **artists** and their respective **paintings**.

Technologies used **Node.js**, **Dotenv**, **Mongoose**, **Express**, **jsonwebtoken** and **MongoDB**.

## Installation & Setup
### *1 -- Clone the repository*

git clone https://github.com/tomludden/project-7.git

### *2 -- Start the server*

npm i : install dependencies
### Commands (npm run)
"start": "node index.js",
"dev": " nodemon index.js",

### Artists Routes
artistRouter.get('/:id', getArtist)\
artistRouter.get('/', getArtists)\
artistRouter.post('/', [isAdmin], postArtist)\
artistRouter.put('/:id', [isAdmin], updateArtist)\
artistRouter.delete('/:id', [isAdmin], deleteArtist)




### Paintings Routes

paintingRouter.get('/:id', getPainting)\
paintingRouter.get('/', getPaintings)\
paintingRouter.get('/unverified', [isAdmin], getPaintingsUnverified)\
paintingRouter.post('/', [isAuth], postPainting)\
paintingRouter.put('/:id', [isAdmin], updatePainting)\
paintingRouter.delete('/:id', [isAdmin], deletePainting)

### Artist-Painting Relationship

GET	/api/v1/artists/:id/albums	-- Get albums for a specific artist\
GET	/api/v1/albums/:id/artist	-- Get artist for a specific painting

### Seeds (npm run)

**"artistSeed"**: "node ./src/utils/seeds/artistSeed.js",\
**"albumSeed"**: "node ./src/utils/seeds/albumSeed.js"\
**userSeed**: "node ./src/utils/seeds/userSeed.js"
