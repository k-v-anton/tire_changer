const { Schema, model } = require('mongoose')

const Work = new Schema({
  description: { type: String, required: true },
  price: { type: Number, requires: true },
  
})

const Price = new Schema({
  radius: { type: String, unique: true, required: true },
  removingWheel: { type: Work, required: true },
  installingWhell: { type: Work, required: true },
  unmountingFromDisk: { type: Work, required: true },
  mountingOnDisk: { type: Work, required: true },
  balancingWheel: { type: Work, required: true },
  complexOneWheel: { type: Work, required: true },
  complexFourWheel: { type: Work, required: true },
})

module.exports = {
  Minibus: model('Minibus', Price),
  Passanger: model('Passanger', Price),
  Suv: model('Suv', Price),
}
