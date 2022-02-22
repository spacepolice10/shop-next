const { Category } = require('../models/models')

class CategoryController {
    async create(req, res) {
        const { name } = req.body
        const category = await Category.create( { name } )
        return res.json(category)
    }
    async getAll(req, res) {
        const categorys = await Category.findAll()
        return res.json(categorys)
    }
}

module.exports = new CategoryController()