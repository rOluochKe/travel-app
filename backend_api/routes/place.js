const router = require('express').Router()
const placeController = require('../controllers/placeController')
const verifyToken = require('../middleware/jwt_token')

router.post('/', verifyToken, placeController.addPlace)
router.get('/', placeController.getPlaces)
router.get('/:id', placeController.getPlace)
router.get('/by-country/:id', placeController.getPlacesByCountry)
router.get('/search/:key', placeController.search)

module.exports = router