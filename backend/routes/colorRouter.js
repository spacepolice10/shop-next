const Router = require('express')
const router = new Router()
const colorController = require('../controllers/colorController')

router.post('/create', colorController.create)
router.get('/', colorController.getAll)

module.exports = router