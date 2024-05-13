
import express from 'express'
// import { postController } from '~/controllers/postController'
// import protectRoute from '~/middlewares/protectRoute'
// import { postValidation } from '~/validations/postValidations'

const Router = express.Router()

// Router.route('/')
//   .get(postController.getPost)

// Router.route('/:id')
//   .get(postController.getPost)

// Router.route('/create')
//   .post(protectRoute, postValidation.CreateNew, postController.CreateNew)

// Router.route('/delete/:id')
//   .delete(protectRoute, postController.DeletePost)

// Router.route('/like/:id')
//   .put(protectRoute, postController.LikeUnlike)

export const ticketRoute = Router