const express = require('express')
const routes = express.Router()

const OngController = require('./controllers/OngControllers')
const IncidentsController = require('./controllers/IncidentsController')
const ProfileController = require('./controllers/ProfileController')
const SessionConstroller = require('./controllers/SessionController')

routes.post('/session', SessionConstroller.create)

routes.get('/ongs', OngController.index);
routes.post('/ongs', OngController.create);

routes.get('/profile', ProfileController.index);

routes.get('/incidents', IncidentsController.index);
routes.post('/incidents', IncidentsController.create);
routes.delete('/incidents/:id', IncidentsController.delete);

module.exports = routes;