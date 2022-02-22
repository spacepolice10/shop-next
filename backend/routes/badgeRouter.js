const Router = require('express')
const router = new Router()
const badgeController = require('../controllers/badgeController')

router.post('/create', badgeController.create)
router.get('/', badgeController.getAll)
router.get('/:id', badgeController.getOne)

module.exports = router