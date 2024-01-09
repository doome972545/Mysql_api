const router = require('express').Router();
const {loginAdmin} =require('../controller/admin.controller')

router.post('/',loginAdmin )

module.exports = router;