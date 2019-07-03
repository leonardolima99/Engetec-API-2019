// nodemailer

const nodemailer = require('nodemailer')

async function send() {
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

module.export = send()