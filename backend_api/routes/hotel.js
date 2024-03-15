const router = require('express').Router()
const hotelController = require('../controllers/hotelController')
const verifyToken = require('../middleware/jwt_token')

router.post('/', verifyToken, hotelController.addHotel)
router.get('/', hotelController.getHotelsByCountry)
router.get('/by-country/:id', hotelController.getHotelById)

module.exports = router