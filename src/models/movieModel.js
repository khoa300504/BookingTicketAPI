import { ObjectId } from 'mongodb'
import { GET_DB } from '~/config/mongodb'

const LISTMOVIE_COLLECTION_NAME = 'listmovies'
const MOVIE_COLLECTION_NAME = 'movie'
const GENRES_COLLECTION_NAME = 'genres'
const TICKET_COLLECTION_NAME = 'ticket'

const findOneListFilm = async (listFilmPage) => {
  let id
  if (listFilmPage === '1') id = '6641f4a3df2e181b7e2ce0cf'
  if (listFilmPage === '2') id = '6641f4c4df2e181b7e2ce0d1'
  const query = { _id: new ObjectId(id) }
  const option = {
    projection: { _id: 0 }
  }
  const result = await GET_DB().collection(LISTMOVIE_COLLECTION_NAME).findOne(query, option)
  return result
}

const findListGenres = async () => {
  const query = { id: { $gte: 1, $lte: 21 } }
  const option = {
    projection: { _id: 0 }
  }
  const result = await GET_DB().collection(GENRES_COLLECTION_NAME).find(query, option).toArray()
  return result
}

const findAllFilm = async () => {
  const query = { id: { $gte: 1, $lte: 10 } }
  const option = {
    projection: { _id: 0 }
  }
  const result = await GET_DB().collection(MOVIE_COLLECTION_NAME).find(query, option).toArray()
  return result
}

const findOneFilmDetail = async (filmId) => {
  const query = { id: parseInt(filmId) }
  const option = {
    projection: { _id: 0 }
  }
  const result = await GET_DB().collection(MOVIE_COLLECTION_NAME).findOne(query, option)
  return result
}

const findOneFilmTicket = async (filmId) => {
  const query = { movieId: parseInt(filmId) }
  const option = {
    projection: { _id: 0 }
  }
  const result = await GET_DB().collection(TICKET_COLLECTION_NAME).findOne(query, option)
  return result
}


// const updateSeat = async (userId, updateData) => {
//   try {
//     Object.keys(updateData).forEach(field => {
//       if (INVALID_UPDATE_FIELDS.includes(field))
//         delete updateData[field]
//     })
//     const result = GET_DB().collection(TICKET_COLLECTION_NAME).findOneAndUpdate(
//       { _id: new ObjectId(userId) },
//       { $set: updateData },
//       { returnDocument: 'after' }
//     )
//     return result
//   } catch (error) {throw new Error(error)}
// }

export const movieModel = {
  findOneListFilm,
  findListGenres,
  findOneFilmDetail,
  findOneFilmTicket,
  findAllFilm,
  // updateSeat
}