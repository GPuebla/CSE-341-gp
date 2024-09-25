const routes = require("express").Router();
const lesson1Controllers = require('../controllers/lesson1');


routes.get('/', lesson1Controllers.helloRoute);

routes.get('/bye', lesson1Controllers.byeRoute);

module.exports = routes;