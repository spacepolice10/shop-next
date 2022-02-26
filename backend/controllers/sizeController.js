const { Size } = require('../models/models')

class SizeController {
    async create(req, res) {
        const { name } = req.body
        const size = await Size.create( { name } )
        return res.json(size)
    }
    async getAll(req, res) {
        const sizes = await Size.findAll()
        return res.json(sizes)
    }
    async getOne(req, res) {
        const { id } = req.params
        const size = await Size.findOne({where: { id }})
        return res.json(size)
    }
}

module.exports = new SizeController()