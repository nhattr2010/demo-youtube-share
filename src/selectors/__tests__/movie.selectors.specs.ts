import { EReducerNamespaces } from "../../constants/reducerNamespaces";
import { IApplicationState } from "../../types/redux/applicationState";
import { MOCK_MOVIE_LIST, MOCK_MOVIE_VOTES } from "../../mock/movie";
import { selectMovieVotes, selectSharedMovies } from "../movie";
import { appState } from "../../redux/store";


const mockState: IApplicationState = {
  ...appState,
  [EReducerNamespaces.Movie]: {
    list: [...MOCK_MOVIE_LIST],
    total: 3,
    votes: {...MOCK_MOVIE_VOTES},
    shareLoading: false,
    listLoading: false,
  },
};
describe('movieSelector', () => {
  it('should return movie for selectSharedMovies', () => {
    expect(selectSharedMovies(mockState)).toEqual({list: MOCK_MOVIE_LIST, total: 3});
  });

  it('should return movieVotes for selectMovieVotes', () => {
    expect(selectMovieVotes(mockState)).toEqual(MOCK_MOVIE_VOTES);
  });
});
