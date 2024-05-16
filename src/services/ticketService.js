import { movieModel } from '~/models/movieModel'
import { ticketModel } from '~/models/ticketModel'

/* eslint-disable no-useless-catch */
const createNew = async (reqBody) => {
  try {
    const newTicket = {
      ...reqBody
    }
    const seat = { seat: 1 }
    const result = await ticketModel.createNew(newTicket)
    if (result.insertedId) return true
    else return false
  } catch (error) { throw error }
}

const getTicketDetail = async () => {
  try {
    return await ticketModel.getAllTicket()
  } catch (error) { throw error }
}

export const ticketService = {
  createNew,
  getTicketDetail
}