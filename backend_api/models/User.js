const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
  username: { type: 'string', require: true },
  email: { type: 'string', require: true, unique: true },
  password: { type: 'string', require: true },
  profile: { type: 'string', default: '' },
})

module.exports = mongoose.model('User', UserSchema)