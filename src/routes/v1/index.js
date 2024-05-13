import express from 'express'
import { StatusCodes } from 'http-status-codes'
import { ticketRoute } from './ticketRoute'
import { movieRoute } from './movieRoute'

const Router = express.Router()

Router.get('/status', (req, res) => {
  res.status(StatusCodes.OK).json({ message: 'Server is ready to use' })
})

Router.use('/movies', movieRoute)

Router.use('/tickets', ticketRoute)

export const APIs_V1 = Router