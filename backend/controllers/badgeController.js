const { Badge } = require('../models/models')

class BadgeController {
    async create(req, res) {
        const { name } = req.body
        const badge = await Badge.create( { name } )
        return res.json(badge)
    }
    async getAll(req, res) {
        const badges = await Badge.findAll()
        return res.json(badges)
    }
    async getOne(req, res) {
        const { id } = req.params
        const badge = await Badge.findOne({where: { id }})
        return res.json(badge)
    }
}

module.exports = new BadgeController()