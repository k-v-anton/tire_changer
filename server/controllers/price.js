const { Minibus, Suv, Passanger } = require('../models/Price')
const errorMessage = require('../utils/errorMessage')

const getMinibusCarPrice = async (req, res) => {
  try {
    const price = await Minibus.find()
    res.json(price)
  } catch (err) {
    console.log(err)
    errorMessage(res, 500, 'Сервер не отвечает')
  }
}

const getSUVCarPrice = async (req, res) => {
  try {
    const price = await Suv.find()

    res.json(price)
  } catch (err) {
    console.log(err)
    errorMessage(res, 500, 'Сервер не отвечает')
  }
}

const getPassangerCarPrice = async (req, res) => {
  try {
    const price = await Passanger.find()
    res.json(price)
  } catch (err) {
    console.log(err)
    errorMessage(res, 500, 'Сервер не отвечает')
  }
}

module.exports = {
  getMinibus: getMinibusCarPrice,
  getSUV: getSUVCarPrice,
  getPassanger: getPassangerCarPrice,
}
