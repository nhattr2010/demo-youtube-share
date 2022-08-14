import userReducer, { movieInitState } from "../movie.reducer";
import { MOCK_MOVIE, MOCK_MOVIE_LIST, MOCK_MOVIE_VOTES } from "../../../mock/movie";
import {
  getSharedMoviesFailure,
  getSharedMoviesStart,
  getSharedMoviesSuccess,
} from "../movie.action";

describe('MovieReducer', () => {
  it('should handler GET_LIST_START action', () => {
    expect(userReducer(movieInitState, getSharedMoviesStart())).toEqual(
      {
        ...movieInitState,
        listLoading: true,
      }
    );
  });

  it('should handler GET_LIST_FAILURE action', () => {
    expect(userReducer(movieInitState, getSharedMoviesFailure())).toEqual(
      {
        ...movieInitState,
        listLoading: false,
      }
    );
  });

  it('should handler GET_LIST_SUCCESS action', () => {
    expect(userReducer(movieInitState, getSharedMoviesSuccess({movies: MOCK_MOVIE, totalRecord: 3}))).toEqual(
      {
        ...movieInitState,
        list: MOCK_MOVIE_LIST,
        total: 3,
        votes: MOCK_MOVIE_VOTES,
        listLoading: false,
      }
    );
  });
});
