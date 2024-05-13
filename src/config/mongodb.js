import { MongoClient, ServerApiVersion } from 'mongodb'
import { env } from './environment'

let bookingticketDatabaseInstance = null

const client = new MongoClient(env.MONGODB_URI, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true
  }
})

export const CONNECT_DB = async () => {
  await client.connect()
  bookingticketDatabaseInstance = client.db(env.DATABASE_NAME)
}

export const GET_DB = () => {
  if (!bookingticketDatabaseInstance) throw new Error('Connect to Database first!')
  return bookingticketDatabaseInstance
}

export const CLOSE_DB = async () => {
  await bookingticketDatabaseInstance.close()
}

