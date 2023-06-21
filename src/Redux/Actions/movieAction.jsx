import axios from 'axios'
import { allMoviesApi, FILTER_MOVIES, genresApi, GET_MOVIES, GET_MOVIES_BY_GNRES, LANGUAGE, popularMoviesApi, searchApi, SEARCH_FOR_MOVIES, topRatedMoviesApi } from '../Types/moviesTypes'

export const changeLanguage = (lan) => {
    return ({ type: LANGUAGE, language: lan })
}

export const getAllMovies = (lang) => {
    return async (dispatch) => {
        const res = await axios.get(`${allMoviesApi}&language=${lang}`)
        const resg = await axios.get(`${genresApi}&language=${lang}`)
        dispatch({ type: GET_MOVIES, data: res.data.results, pages: res.data.total_pages, genres: resg.data.genres, apiTarget: "all" })
    }
}

export const getPopularMovies = (lang) => {
    return async (dispatch) => {
        const res = await axios.get(`${popularMoviesApi}&language=${lang}`)
        dispatch({ type: FILTER_MOVIES, data: res.data.results, pages: res.data.total_pages, apiTarget: "popular" })
    }
}

export const getTopRatedMovies = (lang) => {
    return async (dispatch) => {
        const res = await axios.get(`${topRatedMoviesApi}&language=${lang}`)
        dispatch({ type: FILTER_MOVIES, data: res.data.results, pages: res.data.total_pages, apiTarget: "top" })
    }
}

export const searchForMovie = (word, lang) => {
    return async (dispatch) => {
        if (word === '') {
            getAllMovies();
        } else {
            const res = await axios.get(`${searchApi}${word}&language=${lang}`)
            dispatch({ type: SEARCH_FOR_MOVIES, data: res.data.results, pages: res.data.total_pages, apiTarget: "search", word: word })
        }
    }
}

export const getMoviesByGenres = (movieSet, genid) => {
    const res = movieSet.filter((mov) => mov.genre_ids.includes(genid))
    return ({ type: GET_MOVIES_BY_GNRES, data: res })
}

export const getPage = (page, lang, apiTarget, word) => {
    return async (dispatch) => {
        let res
        if (apiTarget === 'all') {
            res = await axios.get(`${allMoviesApi}&page=${page}&language=${lang}`)
        }
        else if (apiTarget === 'popular') {
            res = await axios.get(`${popularMoviesApi}&page=${page}&language=${lang}`)
        }
        else if (apiTarget === 'top') {
            res = await axios.get(`${topRatedMoviesApi}&page=${page}&language=${lang}`)
        }
        else {
            res = await axios.get(`${searchApi}${word}&page=${page}&language=${lang}`)
        }
        dispatch({ type: FILTER_MOVIES, data: res.data.results, pages: res.data.total_pages, apiTarget: apiTarget })
    }
}


