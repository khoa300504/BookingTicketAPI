
import express from 'express'
import { movieController } from '~/controllers/movieController'
// import { postController } from '~/controllers/postController'
// import protectRoute from '~/middlewares/protectRoute'
// import { postValidation } from '~/validations/postValidations'

const Router = express.Router()

Router.route('/')
  .get(movieController.getListFilm)

Router.route('/genres')
  .get(movieController.getListGenres)

Router.route('/:id')
  .get(movieController.getFilmDetail)

Router.route('/ticket/:id')
  .get(movieController.getFilmTicket)

// Router.route('/delete/:id')
//   .delete(protectRoute, postController.DeletePost)

// Router.route('/like/:id')
//   .put(protectRoute, postController.LikeUnlike)

export const movieRoute = Router