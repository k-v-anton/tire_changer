const Router = require('express')
const controller = require('../controllers/price')

const router = new Router()

router.get('/minibus', controller.getMinibus)
router.get('/passanger', controller.getPassanger)
router.get('/suv', controller.getSUV)


module.exports = router