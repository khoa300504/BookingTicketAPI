import { StatusCodes } from 'http-status-codes'
import { movieService } from '~/services/movieService'

const getListFilm = async (req, res, next) => {
  try {
    const listFilm = await movieService.getListFilm(req.query)
    res.status(StatusCodes.OK).json(listFilm)
  } catch (error) { next(error) }
}

const getListGenres = async (req, res, next) => {
  try {
    const listGenres = await movieService.getListGenres()
    res.status(StatusCodes.OK).json(listGenres)
  } catch (error) { next(error) }
}

const getFilmDetail = async (req, res, next) => {
  try {
    const filmDetail = await movieService.getFilmDetail(req.params)
    res.status(StatusCodes.OK).json(filmDetail)
  } catch (error) { next(error) }
}

export const movieController = {
  getListFilm,
  getListGenres,
  getFilmDetail
}