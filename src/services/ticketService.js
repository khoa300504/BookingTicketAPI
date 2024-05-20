import { movieModel } from '~/models/movieModel'
import { ticketModel } from '~/models/ticketModel'

/* eslint-disable no-useless-catch */
const createNew = async (reqBody) => {
  try {
    const newTicket = {
      ...reqBody
    }
    const { movieId, seat } = newTicket
    console.log('🚀 ~ createNew ~ seat:', seat)
    console.log('🚀 ~ createNew ~ movieId:', movieId)
    const result = await ticketModel.createNew(newTicket)
    await movieModel.updateSeat(movieId, seat)
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