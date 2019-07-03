const mongoose = require('mongoose')

const Home = mongoose.model('Home')

module.exports = {
  show: async (req, h) => {
    return await Home.find() 
  },
  create: async (req, h) => {
    await Home.deleteMany({})
    const conteudo = {
      title: req.payload.title,
      content: req.payload.content
    }
    return await Home.create(conteudo)

  },
  edit: async (req, h) => {
      
    return await Home.updateOne({},
      {
        $set: {
          title: req.payload.title,
          content: req.payload.content
        }
      })
  }
}