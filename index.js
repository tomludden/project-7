require('dotenv').config()
cors = require('cors')
const express = require('express')
const { connectDB } = require('./src/config/db')
const artistRouter = require('./src/api/routes/artists')
const paintingRouter = require('./src/api/routes/paintings')
const userRoutes = require('./src/api/routes/users')

const app = express()

connectDB()
console.log('Database URL:', process.env.DB_URL)

app.use(express.json())
app.use(cors())

app.use('/api/v1/artists', artistRouter)
app.use('/api/v1/paintings', paintingRouter)
app.use('/api/v1/users', userRoutes)

app.listen(3000, () => {
  console.log('server running on http://localhost:3000')
})
