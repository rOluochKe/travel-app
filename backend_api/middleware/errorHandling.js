const errorHandler = (req, res, next, error) => {
  return res.status(500).json({ Status: false, message: 'Error creating user' })
}

module.exports = errorHandler
