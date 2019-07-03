const mongoose = require('mongoose')

const HomeSchema = mongoose.Schema({
  title: {
    type: String,
    default: 'Um titulo qualquer'
  },
  content: {
    type: String,
    default: '<p class="article-text">Um conteúdo qualquer</p>'
  },
  createAt: {
    type: Date,
    default: Date.now
  }
})

mongoose.model('Home', HomeSchema)
