const mongoose = require('mongoose')

const Galeria = mongoose.model('Galeria')

module.exports = {
  show: async (req, h) => {
    return await Galeria.find()
  },
  create: async (req, h) => {
    const imagem = {
      imagem: req.payload.imagem
    }
    console.log(imagem)
    return await Galeria.create(imagem)
  },
  edit: async (req, h) => {
    return await Galeria.UpdateOne(
    {
      "_id": req.params.id
    },
    {
      $set: {
        imagem: req.payload.imagem
      }
    })
  },
  delete: async (req, h) => {
    return await Galeria.deleteOne({"_id": req.params.id })
  },
  deleteAll: async (req, h) => {
    return await Galeria.deleteMany({})
  }
}