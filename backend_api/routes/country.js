const router = require('express').Router()
const countryController = require('../controllers/countryController')
const verifyToken = require('../middleware/jwt_token')

router.post('/', verifyToken, countryController.addCountry)
router.post('/places', verifyToken, countryController.addPlacesToCountry)
router.get('/', countryController.getCountries)
router.get('/:id', countryController.getCountry)

module.exports = router