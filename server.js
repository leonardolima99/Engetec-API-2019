'use strict';

const Hapi = require('@hapi/hapi')
const mongoose = require('mongoose')

require('./models/Inscricao')
require('./models/Home')
require('./models/Galeria')
require('./models/Eventos')
const InscricaoController = require('./controllers/InscricaoController')
const HomeController = require('./controllers/admin/HomeController')
const GaleriaController = require('./controllers/admin/GaleriaController')
const EventosController = require('./controllers/admin/EventosController')

// mongoose.connect('mongodb://localhost:27017/engetec', {
mongoose.connect('mongodb+srv://dbRyszol:05091993a@cluster0-yeubg.mongodb.net/test?retryWrites=true&w=majority', {
  useNewUrlParser: true
}).then(res => {
  console.log('Conectado ao Mongo.')
}).catch(err => {
  console.log(err)
})

const init = async () => {

    const server = Hapi.server({
        port: 3000,
        host: 'localhost'
    });

    server.route({
      method: 'GET',
      path: '/inscricoes',
      config: {
        cors: {
            origin: ['*'],
            additionalHeaders: ['cache-control', 'x-requested-with']
          }
        },
      handler: InscricaoController.listar
    })
    server.route({
      method: 'POST',
      path: '/inscricoes/new',
      config: {
        cors: {
            origin: ['*'],
            additionalHeaders: ['cache-control', 'x-requested-with']
          }
        },
      handler: InscricaoController.inscrever
    })
    server.route({
      method: 'GET',
      path: '/home',
      config: {
        cors: {
            origin: ['*'],
            additionalHeaders: ['cache-control', 'x-requested-with']
          }
        },
      handler: HomeController.show
    })
    server.route({
      method: 'POST',
      path: '/home',
      config: {
        cors: {
            origin: ['*'],
            additionalHeaders: ['cache-control', 'x-requested-with']
          }
        },
      handler: HomeController.create
    })
    server.route({
      method: 'PUT',
      path: '/home',
      config: {
        cors: {
            origin: ['*'],
            additionalHeaders: ['cache-control', 'x-requested-with']
          }
        },
      handler: HomeController.edit
    })
    server.route({
      method: 'GET',
      path: '/eventos',
      config: {
        cors: {
            origin: ['*'],
            additionalHeaders: ['cache-control', 'x-requested-with']
          }
        },
      handler: EventosController.show
    })
    server.route({
      method: 'POST',
      path: '/eventos',
      config: {
        cors: {
            origin: ['*'],
            additionalHeaders: ['cache-control', 'x-requested-with']
          }
        },
      handler: EventosController.create
    })
    server.route({
      method: 'PUT',
      path: '/eventos/{id}',
      config: {
        cors: {
            origin: ['*'],
            additionalHeaders: ['cache-control', 'x-requested-with']
          }
        },
      handler: EventosController.edit
    })
    server.route({
      method: 'DELETE',
      path: '/eventos/{id}',
      config: {
        cors: {
            origin: ['*'],
            additionalHeaders: ['cache-control', 'x-requested-with']
          }
        },
      handler: EventosController.delete
    })

    await server.start();
    console.log('Servidor rodando em %s', server.info.uri);
};

process.on('unhandledRejection', (err) => {

    console.log(err);
    process.exit(1);
});

init();