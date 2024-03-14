const router = require('express').Router()
const hotelController = require('../controllers/hotelCountroller')
const verifyToken = require('../middleware/jwt_token')

router.post('/', verifyToken, hotelController.addHotel)
router.get('/', hotelController.getHotels)
router.get('/:id', hotelController.getHotel)

module.exports = router