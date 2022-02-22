require('dotenv').config()
const express = require('express')
const sequelize = require('./db')
const models = require('./models/models')
const cors = require('cors')

const app = express()

app.listen(5000, () => console.log('hey'))