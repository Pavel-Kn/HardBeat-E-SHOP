// 1. У любого пользователя будет как минимум в БД qualities & professions
// 2. Они равны mock данным
const Profession = require('../models/Profession')
const Quality = require('../models/Quality')
const Category = require('../models/Category')
const Product = require('../models/Product')
const professionMock = require('../mock/professions.json')
const qualitiesMock = require('../mock/qualities.json')
const categoriesMock = require('../mock/categories.json')
const productsMock = require('../mock/products.json')
const Token = require("../models/Token");

module.exports = async () => {
  const professions = await Profession.find()
  if (professions.length !== professionMock.length) {
    await createInitialEntity(Profession, professionMock)
  }

  const categories = await Category.find()
  if (categories.length !== categoriesMock.length) {
    await createInitialEntity(Category, categoriesMock)
  }

  const products = await Product.find()
  if (products.length !== productsMock.length) {
    await createInitialEntity(Product, productsMock)
  }

  const qualities = await Quality.find()
  if (qualities.length !== qualitiesMock.length) {
    await createInitialEntity(Quality, qualitiesMock)
  }
}

async function createInitialEntity(Model, data) {
  await Model.collection.drop()
  return Promise.all(
    data.map(async item => {
      try {
        delete item._id
        const newItem = new Model(item)
        await newItem.save()
        return newItem
      } catch (e) {
        return e
      }
    })
  )
}