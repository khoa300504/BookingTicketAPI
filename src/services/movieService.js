/* eslint-disable no-useless-catch */
import { movieModel } from '~/models/movieModel'

const getListFilm = async (reqQuery) => {
  try {
    const listFilmPage = reqQuery.page
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

const getFilmTicket = async (reqParams) => {
  try {
    const filmId = reqParams.id
    return await movieModel.findOneFilmTicket(filmId)
  } catch (error) { throw error }
}

const filmSearch = async (reqQuery) => {
  try {
    const filmName = reqQuery.name
    const listFilm = await movieModel.findAllFilm()
    const trueFilm = []
    listFilm.forEach(f => {
      if (f.title.toLowerCase().includes(filmName.toLowerCase())) trueFilm.push(f)
    })
    return trueFilm
  } catch (error) { throw error }
}

export const movieService = {
  getListFilm,
  getListGenres,
  getFilmDetail,
  getFilmTicket,
  filmSearch
}