const Router = require('express')
const router = new Router()
const sizeController = require('../controllers/sizeController')

router.post('/create', sizeController.create)
router.get('/', sizeController.getAll)
router.get('/:id', sizeController.getOne)

module.exports = router