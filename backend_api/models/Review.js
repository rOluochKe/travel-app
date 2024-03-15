const mongoose = require('mongoose')

const ReviewSchema = new mongoose.Schema({
  place: { type: 'string', require: true },
  review: { type: 'string', require: true },
  rating: { type: Number, require: true },
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
}, { timestamps: false })

module.exports = mongoose.model('Review', ReviewSchema)