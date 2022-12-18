const express = require('express')
const router = express.Router({ mergeParams: true })

// /api/auth
router.use('/auth', require('./auth.routes'))
router.use('/comment', require('./comment.routes'))
router.use('/user', require('./user.routes'))
router.use("/product", require("./product.routes"));

module.exports = router