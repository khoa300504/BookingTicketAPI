/* eslint-disable no-useless-catch */
import { movieModel } from '~/models/movieModel'

const getListFilm = async (reqBody) => {
  try {
    const listFilmPage = reqBody.page
    return await movieModel.findOneListFilm(listFilmPage)
  } catch (error) { throw error }
}

const getListGenres = async () => {
  try {
    return await movieModel.findListGenres()
  } catch (error) { throw error }
}

const getFilmDetail = async (reqParams) => {
  try {
    const filmId = reqParams.id
    return await movieModel.findOneFilmDetail(filmId)
  } catch (error) { throw error }
}

export const movieService = {
  getListFilm,
  getListGenres,
  getFilmDetail
}