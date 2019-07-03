const mongoose = require('mongoose')

const EventosSchema = mongoose.Schema({
  name: {
    type: String,
    default: 'Um nome de evento qualquer'
  },
  local: {
    type: String,
    default: 'Um local qualquer na faculdade'
  },
  date: {
    type: Date,
    default: Date.now
  },
  description: {
    type: String,
    default: 'A descrição do evento.'
  },
  createAt: {
    type: Date,
    default: Date.now
  }
})

mongoose.model('Eventos', EventosSchema)
