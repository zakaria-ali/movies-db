import { FILTER_MOVIES, GET_MOVIES, GET_MOVIES_BY_GNRES, LANGUAGE, SEARCH_FOR_MOVIES } from "../Types/moviesTypes";

const initialValue = { movies: [], pageCount: 0, language: "en", apiTarget: "all", genres: [], word: "" }
export const moviesReducer = (state = initialValue, action) => {
    switch (action.type) {
        case GET_MOVIES:
            return { ...state, movies: action.data, pageCount: action.pages, genres: action.genres, apiTarget: action.apiTarget }
        case FILTER_MOVIES:
            return { ...state, movies: action.data, pageCount: action.pages, apiTarget: action.apiTarget }
        case LANGUAGE:
            return { ...state, language: action.language }
        case GET_MOVIES_BY_GNRES:
            return { ...state, movies: action.data }
        case SEARCH_FOR_MOVIES:
            return { ...state, movies: action.data, pageCount: action.pages, apiTarget: action.apiTarget, word: action.word }
        default:
            return state;
    }
}