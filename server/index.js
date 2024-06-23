const express = require('express')
const mongoose = require('mongoose')
const PORT = process.env.PORT || 5000
const cors = require('cors')
const priceRouter = require('./routers/price')

const DB_URL = 
'mongodb+srv://antonkurilik17:rfibv17081992@cluster0.2gzzhq2.mongodb.net/tire_changer?retryWrites=true&w=majority&appName=Cluster0'

const app = express()
app.use(cors())
app.use(express.json())
app.use(priceRouter)

const start = async () => {
  try {
    await mongoose.connect(DB_URL)
    app.listen(PORT, () => {
      console.log(`SERVER START ${PORT}`)
    })
  } catch (e) {
    console.log(e)
  }
}

start()
