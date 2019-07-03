const mongoose = require('mongoose')

const GaleriaSchema = mongoose.Schema({
  link: {
    type: String,
    default: 'Um link qualquer'
  }
})

mongoose.model('Galeria', GaleriaSchema)
