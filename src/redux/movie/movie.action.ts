import {
  GET_LIST,
  GET_LIST_FAILURE, GET_LIST_START,
  GET_LIST_SUCCESS,
} from "./movie.const";
import { TMovieWithVotesWithTotalRes, TQuery } from "./movie.type";

export const getSharedMovies = ({offset, limit}: TQuery) => ({
  type: GET_LIST,
  payload: {
    offset,
    limit
  }
})

export const getSharedMoviesStart = () => ({
  type: GET_LIST_START,
})

export const getSharedMoviesSuccess = (res: TMovieWithVotesWithTotalRes) => ({
  type: GET_LIST_SUCCESS,
  payload: res
})

export const getSharedMoviesFailure = () => ({
  type: GET_LIST_FAILURE,
})
