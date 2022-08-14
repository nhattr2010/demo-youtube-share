import { TMovie, TMovieVotes } from "../movie";

export interface IMovieState {
  list: TMovie[];
  total: number,
  votes: TMovieVotes,
  listLoading: boolean;
  shareLoading: boolean;
}
