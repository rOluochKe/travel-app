const express = require('express')
const dotenv = require('dotenv')
const mongoose = require('mongoose')
const errorHandler = require('./middleware/errorHandling')
const authRouter = require('./routes/auth')
const userRouter = require('./routes/user')
const placeRouter = require('./routes/place')
const countryRouter = require('./routes/country')
const hotelRouter = require('./routes/hotel')

const port = 3000
dotenv.config()
const app = express()
mongoose.connect(process.env.MONGO_URL)
.then(() => console.log('DB Connected'))
.catch((err) => console.log(err))

app.use(express.json({ limit: '10mb' }))
app.use(express.urlencoded({ limit: '10mb', extended: true }))

app.use(errorHandler)

app.get('/', (req, res) => res.send('Welcome to the Travel Application!'))
app.use('/api/auth/', authRouter)
app.use('/api/users/', userRouter)
app.use('/api/places/', placeRouter)
app.use('/api/countries/', countryRouter)
app.use('/api/hotels/', hotelRouter)

app.listen(process.env.PORT || port, () => console.log(`Server app listening on port ${process.env.PORT || port}!`))
