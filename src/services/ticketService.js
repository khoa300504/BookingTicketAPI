import { movieModel } from '~/models/movieModel'
import { ticketModel } from '~/models/ticketModel'

/* eslint-disable no-useless-catch */
const createNew = async (reqBody) => {
  try {
    const newTicket = {
      ...reqBody
    }
    const result = await ticketModel.createNew(newTicket)
    console.log(newTicket.seat)
    if (result.insertedId) return true
    else return false
  } catch (error) { throw error }
}

export const ticketService = {
  createNew
}