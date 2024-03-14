const mongoose = require('mongoose')

const CountrySchema = new mongoose.Schema({
  country: { type: 'string', require: true },
  description: { type: 'string', require: true },
  imageUrl: { type: 'string', require: true },
  region: { type: 'string', require: true },
  popular: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Place'
    }
  ]
}, { timestamps: true })

module.exports = mongoose.model('Country', CountrySchema)