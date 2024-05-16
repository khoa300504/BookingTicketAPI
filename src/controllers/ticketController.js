import { StatusCodes } from 'http-status-codes'
import { ticketService } from '~/services/ticketService'

const createNew = async (req, res, next) => {
  try {
    const result = await ticketService.createNew(req.body)
    res.status(StatusCodes.OK).json({ message: result })
  } catch (error) { next(error) }
}

export const ticketController = {
  createNew
}