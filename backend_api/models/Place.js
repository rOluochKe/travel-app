const mongoose = require('mongoose')

const PlaceSchema = new mongoose.Schema({
  country_id: { type: 'string', require: true },
  description: { type: 'string', require: true },
  imageUrl: { type: 'string', require: true },
  location: { type: 'string', require: true },
  title: { type: 'string', require: true },
  rating: { type: Number, require: true },
  review: { type: 'string', require: true },
  latitude: { type: Number, require: true },
  longitude: { type: Number, require: true },
  popular: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Hotel'
    }
  ]
}, { timestamps: true })

module.exports = mongoose.model('Place', PlaceSchema)