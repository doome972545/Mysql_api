const router = require('express').Router();
const {readUser, readUserId}= require('../controller/user.controller')
const {verifyToken,verifyTokenAndAdmin} = require('../middleware/verifyToken')

router.get('/',readUser)
router.get('/:id',readUserId)

module.exports = router;