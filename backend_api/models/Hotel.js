const mongoose = require('mongoose')

const HotelSchema = new mongoose.Schema({
  country_id: { type: 'string', require: true },
  title: { type: 'string', require: true },
  description: { type: 'string', require: true },
  availability: {
    start: { type: Date, require: true },
    end: { type: Date, require: true }
   },
  contact: { type: 'string', require: true },
  imageUrl: { type: 'string', require: true },
  rating: { type: Number, require: true },
  review: { type: 'string', require: true },
  location: { type: 'string', require: true },
  coordinates: {
    latitude: { type: Number, require: true },
    longitude: { type: Number, require: true }
  },
  price: { type: Number, require: true },
  facilities: [
    {
      wifi: { type: Boolean, default: true}
    },
    {
      parking: { type: Boolean, default: true}
    },
    {
      ac: { type: Boolean, default: true}
    },
    {
      tv: { type: Boolean, default: true}
    },
    {
      services: { type: Boolean, default: true}
    },
    {
      bathroom: { type: Boolean, default: true}
    },
  ]
}, { timestamps: false })

module.exports = mongoose.model('Hotel', HotelSchema)