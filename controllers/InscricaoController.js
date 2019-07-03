const mongoose = require('mongoose')
// const sgMail = require('@sendgrid/mail') 
const nodemailer = require('nodemailer')

const Inscricao = mongoose.model('Inscricao')

async function main() {
  let testAccount = await nodemailer.createTestAccount()
  let transporter = nodemailer.createTransport({
    host: "smtp.ethereal.email",
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: testAccount.user, // generated ethereal user
      pass: testAccount.pass // generated ethereal password
    }
  })

  let info = await transporter.sendMail({
    from: '"ENGETEC UNIDERP" <engetec2019@gmail.com>',
    to: "leonardo1230987@gmail.com",
    subject: "Hello ✔",
    text: "Hello world?",
    html: "<h1>Welcome</h1><p>That was easy!</p>"
  })

  console.log("Mensagem enviada: %s", info.response)
  console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info))
}

module.exports = {
  teste: (req, h) => {
    return "Teste funcionando!"
  },
  listar: async (req, h) => {
    return await Inscricao.find()
  },
  inscrever: async (req, h) => {
    const userData = {
      nome: req.payload.nome,
      email: req.payload.email,
      telefone: req.payload.telefone,
      rg: req.payload.rg,
      curso: req.payload.curso,
      semestre: req.payload.semestre,
      createdAt: new Date()
    }
    let res = await Inscricao.findOne({email: userData.email})
    if (res) {
      console.log({error: "Email já cadastrado!"})
      return {error: "Email já cadastrado!"}
    } else {
      const inscrito = await Inscricao.create(userData)
      console.log("Usuário criado com sucesso!")
      main().catch(console.error)
      return inscrito
    }
  
  }
}