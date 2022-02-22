const Router = require('express')
const router = new Router()
const itemRouter = require('./itemRouter')
const userRouter = require('./userRouter')
const brandRouter = require('./brandRouter')
const categoryRouter = require('./categoryRouter')
const colorRouter = require('./colorRouter')
const sizeRouter = require('./sizeRouter')
const badgeRouter = require('./badgeRouter')

router.use('/item', itemRouter)
router.use('/user', userRouter)
router.use('/brand', brandRouter)
router.use('/category', categoryRouter)
router.use('/color', colorRouter)
router.use('/size', sizeRouter)
router.use('/badge', badgeRouter)


module.exports = router
