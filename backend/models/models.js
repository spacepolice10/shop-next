const sequelize = require('../db')
const { DataTypes } = require('sequelize')

const User = sequelize.define('user', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    email: {type: DataTypes.STRING, unique: true},
    password: {type: DataTypes.STRING},
    role: {type: DataTypes.STRING, defaultValue: 'USER'}
})

const Cart = sequelize.define('cart', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true}
})

const CartItem = sequelize.define('cart_item', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true}
})

const Lists = sequelize.define('lists', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true}
})

const List = sequelize.define('list', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true}
})

const ListItem = sequelize.define('list_item', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true}
})

const Item = sequelize.define('item', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, unique: true, allowNull: false},
    price: {type: DataTypes.INTEGER, allowNull: false},
    description: {type: DataTypes.STRING},
    image: {type: DataTypes.STRING, allowNull: false}
})

const Category = sequelize.define('category', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, unique: true, allowNull: false}
})

const Brand = sequelize.define('brand', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, unique: true, allowNull: false}
})

const Color = sequelize.define('color', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, unique: true, allowNull: false}
})

const Size = sequelize.define('size', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, unique: true, allowNull: false}
})

const Badge = sequelize.define('badge', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, unique: true, allowNull: true}
})

const Characteristics = sequelize.define('characteristics', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true}
})

User.hasOne(Cart)
Cart.belongsTo(User)

User.hasOne(Lists)
Lists.belongsTo(User)

Cart.hasMany(CartItem)
CartItem.belongsTo(Cart)

Lists.hasMany(List)
List.belongsTo(Lists)

List.hasMany(ListItem)
ListItem.belongsTo(List)

Item.hasMany(ListItem)
ListItem.belongsTo(Item)

Item.hasMany(CartItem)
CartItem.belongsTo(Item)

Category.hasMany(Item)
Item.belongsTo(Category)

Brand.hasMany(Item)
Item.belongsTo(Brand)

Color.hasMany(Item)
Item.belongsTo(Color)

Size.hasMany(Item)
Item.belongsTo(Size)

Badge.hasMany(Item)
Item.belongsTo(Badge)

Category.belongsToMany(Brand, {through: Characteristics})
Category.belongsToMany(Size, {through: Characteristics})
Category.belongsToMany(Color, {through: Characteristics})
Category.belongsToMany(Badge, {through: Characteristics})
Brand.belongsToMany(Category, {through: Characteristics})
Brand.belongsToMany(Size, {through: Characteristics})
Brand.belongsToMany(Color, {through: Characteristics})
Brand.belongsToMany(Badge, {through: Characteristics})
Size.belongsToMany(Category, {through: Characteristics})
Size.belongsToMany(Brand, {through: Characteristics})
Size.belongsToMany(Color, {through: Characteristics})
Size.belongsToMany(Badge, {through: Characteristics})
Color.belongsToMany(Category, {through: Characteristics})
Color.belongsToMany(Brand, {through: Characteristics})
Color.belongsToMany(Size, {through: Characteristics})
Color.belongsToMany(Badge, {through: Characteristics})
Badge.belongsToMany(Category, {through: Characteristics})
Badge.belongsToMany(Brand, {through: Characteristics})
Badge.belongsToMany(Size, {through: Characteristics})
Badge.belongsToMany(Color, {through: Characteristics})

module.exports = {
    User,
    Cart,
    CartItem,
    Lists,
    List,
    ListItem,
    Item,
    Category,
    Brand,
    Size,
    Color,
    Badge,
    Characteristics
}