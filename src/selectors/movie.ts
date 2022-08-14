import { IApplicationState } from "../types/redux/applicationState";
import { createSelector } from "reselect";

export const selectMovie = (state: IApplicationState) => state.movie
export const selectSharedMovies = createSelector(
  selectMovie,
  (movie) => ({
    list: movie.list,
    total: movie.total,
  })
)

export const selectMovieVotes = createSelector(
  selectMovie,
  (movie) => movie.votes
)
