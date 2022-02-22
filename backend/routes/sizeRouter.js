const Router = require('express')
const router = new Router()
const sizeController = require('../controllers/sizeController')

router.post('/create', sizeController.create)
router.get('/', sizeController.getAll)

module.exports = router