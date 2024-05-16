import { GET_DB } from '~/config/mongodb'

const TICKETDETAIL_COLLECTION_NAME = 'ticketdetail'

const createNew = async (newTicket) => {
  try {
    return await GET_DB().collection(TICKETDETAIL_COLLECTION_NAME).insertOne(newTicket)
  } catch (error) {throw new Error(error)}
}

const getAllTicket = async () => {
  const option = {
    projection: { _id: 0 }
  }
  const result = await GET_DB().collection(TICKETDETAIL_COLLECTION_NAME).find({}, option).toArray()
  return result
}

export const ticketModel = {
  createNew,
  getAllTicket
}