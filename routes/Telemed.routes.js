const router = require('express').Router();
const {createTelemed,getTelemed} = require('../controller/telemed.constroller')

router.post('/:id',createTelemed)
router.get('/:id',getTelemed)

module.exports = router;