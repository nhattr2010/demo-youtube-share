import { TMovie, TMovieVote } from "../../types/movie";
import { TCommonApiRes } from "../../types/common";
import { TUser } from "../../types/user";

export type TQuery = {
  limit: number;
  offset: number
}

export type TSharedMovie = {
  url: string;
  id: string
}

export type TMovieWithVotes = TMovie & TMovieVote;
export type TMovieWithVotesRes = Omit<TMovieWithVotes, 'createdBy'> & {
  createdBy: TUser
}

export type TMovieWithVotesWithTotalRes = {
  movies: TMovieWithVotesRes[],
  totalRecord: number
}

export type TMovieRes = TCommonApiRes & {
  data: TMovieWithVotesWithTotalRes
}

export type TMovieSharedRes = TCommonApiRes & {
  data: TMovieWithVotesRes
}

export type TQueryAction = {
  type: string,
  payload: TQuery
}

export type TShareMovieAction = {
  type: string,
  payload: TSharedMovie
}

