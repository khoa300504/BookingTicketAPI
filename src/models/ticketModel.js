import { GET_DB } from '~/config/mongodb'

const TICKETDETAIL_COLLECTION_NAME = 'ticketdetail'

const createNew = async (newTicket) => {
  try {
    return await GET_DB().collection(TICKETDETAIL_COLLECTION_NAME).insertOne(newTicket)
  } catch (error) {throw new Error(error)}
}

export const ticketModel = {
  createNew
}