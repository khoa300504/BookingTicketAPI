
import express from 'express'
import { ticketController } from '~/controllers/ticketController'
// import { postController } from '~/controllers/postController'
// import protectRoute from '~/middlewares/protectRoute'
// import { postValidation } from '~/validations/postValidations'

const Router = express.Router()

// Router.route('/:id')
//   .get(postController.getPost)

Router.route('/create')
  .post(ticketController.createNew)

// Router.route('/delete/:id')
//   .delete(protectRoute, postController.DeletePost)

export const ticketRoute = Router