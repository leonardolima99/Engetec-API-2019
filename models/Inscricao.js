const mongoose = require('mongoose')

const InscricaoSchema = new mongoose.Schema({
  nome: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  telefone: {
    type: String
  },
  rg: {
    type: String,
    required: true
  },
  curso: {
    type: String
  },
  semestre: {
    type: String
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
})

mongoose.model('Inscricao', InscricaoSchema)
