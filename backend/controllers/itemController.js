const uuid = require('uuid')
const path = require('path')
const { Item } = require('../models/models')

class ItemController {
    async create(req, res) {
        try {
            let { name, price, description, brandId, categoryId, colorId, sizeId, badgeId } = req.body
            const { image } = req.files
            let fileName = uuid.v4() + ".jpg"
            image.mv(path.resolve(__dirname, '..', '..', 'public', fileName))
            const item = await Item.create({
                name, 
                price, 
                description,
                brandId,
                categoryId,
                colorId,
                sizeId,
                badgeId,
                image: fileName
            })
            return res.json(item.rows)
        } catch (e) {
            console.log(e)
        }
    }
    async getAll(req, res) {
        let { categoryId, brandId, colorId, sizeId, badgeId, limit, page } = req.query
        page = page || 1
        limit = limit || 9
        let offset = page * limit - limit
        let items
        if (!categoryId && !brandId && !colorId && !sizeId && !badgeId) {
            items = await Item.findAndCountAll({limit, offset})
        }
        if (categoryId && !brandId && !colorId && !sizeId && !badgeId) {
            items = await Item.findAndCountAll({where: {categoryId}, limit, offset})
        }
        if (!categoryId && brandId && !colorId && !sizeId && !badgeId) {
            items = await Item.findAndCountAll({where: {brandId}, limit, offset})
        }
        if (!categoryId && !brandId && colorId && !sizeId && !badgeId) {
            items = await Item.findAndCountAll({where: {colorId}, limit, offset})
        }
        if (!categoryId && !brandId && !colorId && sizeId && !badgeId) {
            items = await Item.findAndCountAll({where: {sizeId}, limit, offset})
        }
        if (!categoryId && !brandId && !colorId && !sizeId && badgeId) {
            items = await Item.findAndCountAll({where: {badgeId}, limit, offset})
        }
        return res.json(items.rows)
    }
}

module.exports = new ItemController()