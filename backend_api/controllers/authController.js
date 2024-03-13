const User = require('../models/User')

const CryptoJS = require('crypto-js')
const jwt = require('jsonwebtoken')

module.exports = {
  createUser: async (req, res, next) => {
    const newUser = new User({
      username: req.body.username,
      email: req.body.email,
      password: CryptoJS.AES.encrypt(req.body.password, process.env.SECRET_KEY)
    })

    try {
      await newUser.save()

      res.status(201).json({ Status: true, message: 'User successfully created'})
    } catch (error) {
      return next(error)
    }
  },
  loginUser: async (req, res, next) => {
    try {
      const user = await User.findOne({email: req.body.email})

      if (!user) {
        return res.status(401).json({status: false, message: 'User not found' })
      }

      const decryptedPassword = CryptoJS.AES.decrypt(user.password, process.env.SECRET_KEY)
      const decryptedString = decryptedPassword.toString(CryptoJS.enc.Utf8)

      if (decryptedString !== req.body.password) {
        return res.status(401).json({ status: false, message: 'Wrong password' })
      }

      const userToken = jwt.sign(
        {
          id: user._id,
        },process.env.JWT_SECRET_KEY, { expiresIn: '7d' }
      )

      const user_id = user._id

      res.status(200).json({ status: true, id: user_id, token: userToken })
    } catch (error) {
      return next(error)
    }
  }
}