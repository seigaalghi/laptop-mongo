const express = require('express')
const router = express.Router();
const fsRouter = require('./fs-routes')
const axiosRouter = require('./axios-routes')

router.use("/fs", fsRouter) // prefix
router.use("/axios", axiosRouter)

module.exports = router;
