const mongoose = require('mongoose')

const Eventos = mongoose.model('Eventos')

module.exports = {
  show: async (req, h) => {
    return await Eventos.find() 
  },
  create: async (req, h) => {
    const conteudo = {
      name: req.payload.name,
      local: req.payload.local,
      date: req.payload.date,
      description: req.payload.description
    }
    return await Eventos.create(conteudo)
  },
  edit: async (req, h) => {
    return await Eventos.updateOne(
      {
        "_id": req.params.id
      },
      {
        $set: {
          name: req.payload.name,
          local: req.payload.local,
          date: req.payload.date,
          description: req.payload.description
        }
      })
  },
  delete: async (req, h) => {
    return await Eventos.deleteOne({"_id": req.params.id})
  }
}