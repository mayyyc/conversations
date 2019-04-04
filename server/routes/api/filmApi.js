const { getFilms, getFilmById, addFilm} = require('../../controllers/api/filmApiController')

module.exports = (app) => {
  // Gets all films
  app.get('/api/films', getFilms);
  // Get a single film by id
  app.get('/api/film', getFilmById);
  // Add a film
  app.post('/api/film', addFilm);
};