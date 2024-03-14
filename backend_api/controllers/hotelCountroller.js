const Hotel = require('../models/Hotel')

module.exports = {
  addHotel: async (req, res, next) => {
    const { country_id, title, description, availability, contact, imageUrl, rating, review, location, coordinates, price, facilities } = req.body

    try {
      const newHotel = new Hotel({country_id, title, description, availability, contact, imageUrl, rating, review, location, coordinates, price, facilities})

      await newHotel.save()

      res.status(201).json({ status: true, message: 'Hotel created successfully' })
    } catch (error) {
      return next(error)
    }
  },
  getHotels: async (req, res, next) => {

  },
  getHotel: async (req, res, next) => {

  }
}