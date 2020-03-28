const express = require("express");
const validation = require("./validation");
const OngController = require('../controllers/OngController');
const IncidentController = require('../controllers/IncidentController');
const ProfileController = require('../controllers/ProfileController')
const SessionController = require('../controllers/SessionController')

const routes = express.Router();

routes.post("/sessions", validation.sessions.create, SessionController.create );

routes.get("/ongs", OngController.index);

routes.post("/ongs", validation.ongs.create, OngController.create );

routes.get('/profile', validation.profile.list, ProfileController.index);

routes.get("/incidents", validation.incidents.list, IncidentController.index);

routes.post("/incidents", validation.incidents.create, IncidentController.create );

routes.delete("/incidents/:id", validation.incidents.delete,
  IncidentController.delete );

module.exports = routes;