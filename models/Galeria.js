const mongoose = require('mongoose')

// const controle = mongoose.Schema({
//   imagem: {
//     type: Array,
//     default: [0]
//   }
// })

const GaleriaSchema = mongoose.Schema({
  // imagens: [controle]
  imagem: {
    type: String
  }
})

mongoose.model('Galeria', GaleriaSchema)
